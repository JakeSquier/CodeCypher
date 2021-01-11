class Api::V1::CodeBlocksController < ApplicationController

    def index
        code_blocks = CodeBlock.all 
        render json: code_blocks
    end

end
