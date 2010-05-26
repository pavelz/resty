class ReservationsController < ApplicationController
  before_filter :authenticate, :only=>:index
  before_filter :authorize,:except => [ :index, :new, :create, :show ]
  rescue_from ActiveRecord::RecordNotFound ,:with=>:error_help

  def error_help(message)
    flash[:error] = message.to_s
    if request.referrer
      redirect_to :back
    else
      redirect_to root_url
    end
  end

  def authorize
    unless current_user
      # TODO: check for the valid token
      raise ActiveRecord::RecordNotFound.new("You don't have permission to do this")
    end
  end

  def index
    @current_objects = Reservation.find(:all, :conditions=> '"when" > current_date',:order=>'"when" ASC',:limit => 20)
  end
  make_resourceful do
    actions :all
  end
end
