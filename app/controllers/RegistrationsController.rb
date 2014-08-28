class RegistrationsController < Devise::RegistrationsController
    skip_before_filter :require_no_authentication
    before_filter :resource_name
    def settings
        @user = current_user
        if @user 
            render :settings
        else
            render file: 'public/404', status: 404, formats: [:html]
         end 
    end
 end
