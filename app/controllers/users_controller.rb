class UsersController < ApplicationController

    # skip_before_action :authorize, only: :create
    before_action :authorize_user, except: [:create]

    def index 
        render json: User.all
    end

    # not sure I understand this... for jwt
    # def profile  
        # render json: @user, status: :ok
    # end

    def show
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end
    
    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    def user_params 
        params.permit(:name, :email, :admin, :password)
    end
end
