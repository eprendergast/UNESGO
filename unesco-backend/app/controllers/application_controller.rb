class ApplicationController < ActionController::API

    def get_current_user
        user_id = decode_token['id']
        User.find_by(id: user_id)
    end

    def issue_token(data)
        JWT.encode(data, secret)
    end

    def decode_token
        begin
            JWT.decode(get_token, secret).first
        rescue
            {}
        end
    end

    def get_token
        request.headers['Authorization']
    end

    def secret
        ENV["SECRET"]
    end

end
