
User.delete_all
Tag.delete_all
SiteReference.delete_all
SiteReferenceTag.delete_all
SavedSite.delete_all

# User

User.create(
    first_name: "Elizabeth",
    last_name: "Prendergast",
    email: "elizabeth.prendergast@gmail.com",
    password: "password1"   
)

puts "#{User.all.length} user(s) created"

# SiteReference

sites = API.get_sites

sites.map{ |site| site["id"] }.each do |id|
    SiteReference.create(site_id: id)
end

puts "#{SiteReference.all.length} site references created"


# def self.get_restaurants(location, category)
#     api_response = Unirest.get( 
#         SEARCH_URL, 
#         headers: {
#             "Accept" => "application/json",
#             "Authorization" => "Bearer #{ENV["API_KEY"]}"
#         },
#         parameters: {
#             :location => location.downcase,
#             :categories => category.downcase,
#             :term => "restaurants",
#             :limit => 10 #can be up to 50; setting to 10 for development
#         }
#     )
#     return JSON.parse(api_response.raw_body)["businesses"]
# end