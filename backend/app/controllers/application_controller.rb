class ApplicationController < ActionController::API

    before_action :logged_in?

    def logged_in?
        headers = request.headers["Authorization"]
        token = headers.to_s.split(" ")[1]

        begin
            user_id = JWT.decode(token, "code")[0]["user_id"]
            user = User.find(user_id)
        rescue => exception
            user = nil
        end

            raise Exception.new('u not logged in')
    end
end
