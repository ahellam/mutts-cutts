class StylistsController < ApplicationController
    def index 
        render json: Service.all
    end
end
