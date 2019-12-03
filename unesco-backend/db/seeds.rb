require_relative './GoogleVisionHelper.rb'
include GoogleVisionHelper

User.delete_all
Tag.delete_all
SiteReference.delete_all
SiteReferenceTag.delete_all
UserBucketlist.delete_all
UserVisited.delete_all

# Generate Test User
user = User.create(
    first_name: "Elizabeth",
    last_name: "Prendergast",
    email: "elizabeth.prendergast@gmail.com",
    password: "password1"   
)
puts "#{User.all.length} user(s) created"

# Generate Site References for all UNESCO sites

# sample_tags = ["Mining town", "Church", "Ancient", "Ruins", "Forest", "Trees", "Architecture", "Cities", "Building", "Landmark", "Waterfall", "Nature", "Mountain", "Adventure", "Roman"]

sites = API.get_sites
sites.each do |site|
    site_reference = SiteReference.create(site_id: site["id"])
    get_tags(site["image_url"], site_reference)
end

puts "#{SiteReference.all.length} site references created with #{Tag.all.length} tags and #{SiteReferenceTag.all.length} tag references"

# Give the test user some saved sites
sample_bucketlist_sites = SiteReference.all.sample(10)
sample_visited_sites = SiteReference.all.sample(10)

sample_bucketlist_sites.each do |site| 
    UserBucketlist.create(
        user_id: user.id,
        site_reference_id: site.id
    )
end

sample_visited_sites.each do |site|
    UserVisited.create(
        user_id: user.id,
        site_reference_id: site.id
    )
end

puts "#{user.first_name} has been created with #{user.user_bucketlists.length} bucketlist sites and #{user.user_visiteds.length} visited sites"

#save
