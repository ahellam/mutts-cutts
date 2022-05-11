class StylistsController < ApplicationController
    def index 
        render json: Stylist.all
    end
end
