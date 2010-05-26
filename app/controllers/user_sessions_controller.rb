class UserSessionsController < ApplicationController
  before_filter :authenticate, :except => [:new, :create]

  def new
    if(current_user)
      redirect_to root_url
    end

    @user_session = UserSession.new
  end
  
  def create
    @user_session = UserSession.new(params[:user_session])
    if @user_session.save
      logger.warn current_user.to_yaml
      flash[:notice] = "Successfully logged in"
      if(session[:redirect_to])
        redirect_to session[:redirect_to]
        session.delete(:redirect_to)
      else
        redirect_to root_url
      end
    else
      render :action => 'new'
    end
  end
  
  def destroy

    @user_session = UserSession.find(params[:id] )
    if @user_session
      @user_session.destroy
    end
    reset_session

    flash[:notice] = "Successfully logged out"
    redirect_to root_url
  end

end
