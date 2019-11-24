
User.delete_all
Tag.delete_all
SiteReference.delete_all
SiteReferenceTag.delete_all
SavedSite.delete_all

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
sample_sites = SiteReference.all.sample(10)

sample_sites.each do |site|
    SavedSite.create(
        user_id: user.id,
        site_reference_id: site.id,
        bucketlist: true,
        visited: false
    )
end
puts "#{user.first_name} has been created with #{user.saved_sites.length} saved sites"

