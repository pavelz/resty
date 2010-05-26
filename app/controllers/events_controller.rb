class EventsController < ApplicationController
  before_filter :authenticate, :except => [:index,:show]
  def index
    @events = Event.find(:all, :order => 'scheduled_for DESC')
  end
  make_resourceful do
    actions :all
  end
end
