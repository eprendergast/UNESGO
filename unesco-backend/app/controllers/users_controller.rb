class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users
    end

    def signup
        new_user = User.create(
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            password: params[:password]
        )
        render json: {first_name: new_user.first_name, token: issue_token({id: new_user.id})}
    end

    def signin
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            # user is valid
            render json: {first_name: user.first_name, token: issue_token({id: user.id})}
        else
            # user OR password is invalid
            render json: {error: "Email and/or password is incorrect"}, status: 401
        end
    end

    def validate
        user = get_current_user
        if user 
            # user is already signed in 
            render json: {first_name: user.first_name, token: issue_token({id: user.id})}
        else
            render json: {error: "Unable to validate user"}, status: 401
        end
    end

end
