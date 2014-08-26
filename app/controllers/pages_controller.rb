class PagesController < ApplicationController
  before_action :authenticate_user!, except: [:home, :start]
  def home
  end  
  def start
  end
  def questions
  end
  def results
  end
  def restaurant
  end
end
