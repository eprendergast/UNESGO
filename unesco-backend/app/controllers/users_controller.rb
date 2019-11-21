class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users
    end

    def signin
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            # user is valid
            render json: {email: user.email, token: issue_token({id: user.id})}
        else
            # user OR password is invalid
            render json: {error: "Email and/or password is incorrect"}, status: 401
        end
    end

    def validate
        user = get_current_user
        if user 
            # user is already signed in 
            render json: {email: user.email, token: issue_token({id: user.id})}
        else
            render json: {error: "Unable to validate user"}, status: 401
        end
    end

end
