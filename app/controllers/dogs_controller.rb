class DogsController < ApplicationController
    def index 
        render json: Dog.all
    end

    def create 
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    def destroy 
        dog = Dog.find(params[:id])
        dog.destroy
        head :no_content
    end

    private 

    def dog_params
        params.permit(:name, :breed, :image_url, :user_id)
    end
end
