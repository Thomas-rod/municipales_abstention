class PagesController < ApplicationController
  def home
    @departments = Department.all
  end
end
