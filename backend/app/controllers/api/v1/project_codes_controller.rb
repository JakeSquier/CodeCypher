class Api::V1::ProjectCodesController < ApplicationController

    def create
        projectCode = ProjectCode.new(project_code_params)
        projectCode.save
        render json: {projectCode: projectCode}, status: :created
    end

    private

    def project_code_params
        params.permit(:project_id, :html, :css, :javascript)
    end
end
