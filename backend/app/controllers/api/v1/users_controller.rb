class Api::V1::UsersController < ApplicationController

    skip_before_action :logged_in?

    def index
        users = User.all 
        render json: users, include: [:projects]
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            token = JWT.encode({id: user.id}, "code")
            render json: {user: user}, status: :created
        else
            render json: {error: "Failed to create user"}, status: :not_acceptable
        end
    end
    
    private 

    def user_params 
        params.permit(:username, :password, :email)
    end
end
