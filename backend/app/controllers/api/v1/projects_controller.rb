class Api::V1::ProjectsController < ApplicationController

    skip_before_action :logged_in?

    def index
        projects = Project.all 
        render json: projects
    end

    def show
        project = Project.find(params[:id])
        render json: project
    end 

    def create
        project = Project.create!(project_params)
        render json: project
    end

    def update
        project = Project.find(params[:id])
        project.update!(project_params)
        render json: project
    end 

    def destroy
        Project.destroy(params[:id])
    end 

    private

    def project_params
        params.require(:project).permit(:user_id, :project_name, :html, :css, :javascript, :theme)
    end 
    
end
