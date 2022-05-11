class AppointmentsController < ApplicationController
    def index 
        render json: Appointment.all
    end

    def create 
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update 
        appointment = Appointment.find(params[:id])
        appointment.update!(patch_params)
        render json: appointment, status: :ok
    end

    def destroy 
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content
    end

    private

    def appointment_params 
        params.permit(:dog_id, :stylist_id, :service_id, :dog_image, :dog_name, :dog_breed, :service_name, :service_price, :stylist_image, :stylist_name, :stylist_intelligence)
    end

    def patch_params    
        params.permit(:stylist_intelligence)
    end
end
