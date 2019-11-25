
User.delete_all
Tag.delete_all
SiteReference.delete_all
SiteReferenceTag.delete_all
Bucketlist.delete_all
Visited.delete_all
SiteReferenceBucketlist.delete_all
SiteReferenceVisited.delete_all

# Generate Test User
user = User.create(
    first_name: "Elizabeth",
    last_name: "Prendergast",
    email: "elizabeth.prendergast@gmail.com",
    password: "password1"   
)
puts "#{User.all.length} user(s) created"

# Generate Site References for all UNESCO sites
sites = API.get_sites
sites.map{ |site| site["id"] }.each do |id|
    SiteReference.create(site_id: id)
end
puts "#{SiteReference.all.length} site references created"

# Give the test user some saved sites
sample_bucketlist_sites = SiteReference.all.sample(10)
sample_visited_sites = SiteReference.all.sample(10)

bucketlist = Bucketlist.create(user_id: user.id)

sample_bucketlist_sites.each do |site| 
    SiteReferenceBucketlist.create(
        site_reference_id: site.id,
        bucketlist_id: bucketlist.id
    )
end

visited = Visited.create(user_id: user.id)
sample_visited_sites.each do |site|
    SiteReferenceVisited.create(
        site_reference_id: site.id, 
        visited_id: visited.id
    )
end



puts "#{user.first_name} has been created with #{user.site_reference_bucketlists.length} bucketlist sites and #{user.site_reference_visiteds.length} visited sites"

