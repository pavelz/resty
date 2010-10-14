class GamesController < ApplicationController
  before_filter :authenticate, :except => [:index, :show]
  def index
    unless current_user
      @featured_game = Game.find ( :first, :conditions => ' featured = true AND scheduled_for >= now()',:order=>'scheduled_for ASC' )
      @current_objects = Game.find(:all, :conditions => 'scheduled_for >= now()',  :order => 'scheduled_for ASC')
    else
      @featured_game = Game.find ( :first, :conditions => ' featured = true AND scheduled_for >= now()',:order=>'scheduled_for ASC' )
      @current_objects = Game.find(:all, :order => 'scheduled_for ASC')

    end
  end
  make_resourceful do
    actions :all
  end
end
