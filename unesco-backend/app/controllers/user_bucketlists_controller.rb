class UserBucketlistsController < ApplicationController

    def create 
        user = get_current_user
        site_reference = SiteReference.find_by(site_id: params[:site_id])
        new_user_bucketlist = UserBucketlist.find_or_create_by(
            user_id: user.id, 
            site_reference_id: site_reference.id
        )
        new_user_bucketlist_site = API.get_site(site_reference.site_id)
        render json: new_user_bucketlist_site
    end

    def destroy
        user = get_current_user
        site_reference = SiteReference.find_by(site_id: params[:site_id])
        user_bucketlist = UserBucketlist.find_or_create_by(
            user_id: user.id, 
            site_reference_id: site_reference.id
        )
        user_bucketlist.destroy!

        render json: site_reference.site_id

    end
end
