class API 

    BASE_URL = "https://unesco-api.herokuapp.com"
    SITES_URL = "#{BASE_URL}/sites"

    def self.get_sites
        response = Unirest.get(
            SITES_URL
        )
        return response.body
    end

    def self.get_site(id)
        url = "#{SITES_URL}/#{id}" 
        response = Unirest.get(
            url
        )
        return response.body
    end

end