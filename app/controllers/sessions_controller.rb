# class SessionsController < ApplicationController
#     # Sessions controller is being managed by bcrypt and we are customizing how to verify our users
#     # When a user is logged in... as long as they stay logged in... THAT is a session

#     before_action :authorize_user, except: [:login]

#     def login
#         user = User.find_by(name: params[:username])
        
#         if user&.authenticate(params[:password])
#             # same as if user && user.authenticate

#             session[:current_user] = user.id

#             # - Set Session's 'login_attempts' to 0

#             # session[:login_attempts] => nil
#             session[:login_attempts] = 0
            
#             render json: user, status: :ok

#         else            
#             # - Set Session's 'login_attempts' to 0 if Undefined / Falsey
#             session[:login_attempts] ||= 0

#             # - Increment Session's 'login_attempts' by 1
#             # session[:login_attempts] = session[:login_attempts] + 1
#             session[:login_attempts] += 1

#             render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
#         end
#     end 

#     def logout
#         session.delete :current_user
#     end 
# end


class SessionsController < ApplicationController
    
    def login
        
        # Find User via unique "username" params
                user = User.find_by!(name: params[:username])

        # if user && user.authenticate("password")
                if user&.authenticate(params[:password])

            # If User authenticates, render Welcome Message with "status: :ok"
                    render json: {user: "Welcome to Mutts Cutts!"}, status: :ok 
                    
                else
            # If User does not authenticate, render "Invalid Password or Username" with "status: :unprocessable_entity"
                    render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end
end

