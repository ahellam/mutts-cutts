# class SessionsController < ApplicationController
    
    # def login
        
        # Find User via unique "username" params
                # user = User.find_by!(name: params[:username])

        # IF FOUND => user = some user instance (NOT FALSEY)
        # IF NOT FOUND => user = nil (FALSEY)

        # if user && user.authenticate("password")
                # if user&.authenticate(params[:password])
            # If User authenticates, render Welcome Message with "status: :ok"
                    # render json: {user: "Welcome to Mutts Cutts!"}, status: :ok 
                # else
            # If User does not authenticate, render "Invalid Password or Username" with "status: :unprocessable_entity"
                    # render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
        # end
    # end
# end


class SessionsController < ApplicationController
    # Group Activity => Set 'authorize_user' to Skip Login Action

    before_action :authorize_user, except: [:login]

    def login
        user = User.find_by(name:params[:username])
        
        if user&.authenticate(params[:password])

            # Group Activity => 
            # - Set Session's 'current_user' to User's ID

            # session[:current_user] => nil
            session[:current_user] = user.id

            # - Set Session's 'login_attempts' to 0

            # session[:login_attempts] => nil
            session[:login_attempts] = 0
            
            render json: user, status: :ok
        else

            # Group Activity =>
            
            # - Set Session's 'login_attempts' to 0 if Undefined / Falsey
            session[:login_attempts] ||= 0

            # - Increment Session's 'login_attempts' by 1
            # session[:login_attempts] = session[:login_attempts] + 1
            session[:login_attempts] += 1

            render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
        end
    end 

    def logout
        session.delete :current_user
    end 
end