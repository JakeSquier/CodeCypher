class Api::V1::AuthController < ApplicationController

    skip_before_action :logged_in?

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])

            render json: {user: user, token: JWT.encode({user_id: user.id}, "code")}

        else

            render json: {error: "Invalid username or password"}
    
        end

    end

    private

    def login_params
        param.permit(:username, :password)
    end 

end
