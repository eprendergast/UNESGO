class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users
    end

    def show 
        user = User.find_by(id: params[:id])
        render json: user
    end

    def signup
        new_user = User.create(
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            password: params[:password]
        )
        render json: {id: new_user.id, first_name: new_user.first_name, token: issue_token({id: new_user.id})}
    end

    def signin
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            # user is valid
            render json: {id: user.id, first_name: user.first_name, token: issue_token({id: user.id})}
        else
            # user OR password is invalid
            render json: {error: "Email and/or password is incorrect"}, status: 401
        end
    end

    def validate
        user = get_current_user
        if user 
            # user is already signed in 
            render json: {id: user.id, first_name: user.first_name, token: issue_token({id: user.id})}
        else
            render json: {error: "Unable to validate user"}, status: 401
        end
    end

    def bucketlist
        user = User.find_by(id: params[:id])
        sites = user.bucketlist_sites
        sites.each do |site|
            site_reference = SiteReference.find_by(site_id: site["id"])
            site["saves"] = site_reference.user_bucketlists.length + site_reference.user_visiteds.length
        end
        render json: sites
    end

    def bucketlist_site_ids
        user = User.find_by(id: params[:id])
        render json: user.bucketlist_site_ids
    end

    def visited
        user = User.find_by(id: params[:id])
        sites = user.visited_sites
        sites.each do |site|
            site_reference = SiteReference.find_by(site_id: site["id"])
            site["saves"] = site_reference.user_bucketlists.length + site_reference.user_visiteds.length
        end
        render json: sites
    end

    def visited_site_ids
        user = User.find_by(id: params[:id])
        render json: user.visited_site_ids
    end

end
