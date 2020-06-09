class PagesController < ApplicationController
  def home
    @departments = Department.all
    @average_percentage = average_percentage
  end

  private
  def average_percentage
    number_abstention = 0
    number_register = 0
    Department.all.each do |d|
      number_register += d.register
      number_abstention += d.abstention
    end
    return (number_abstention.to_f/number_register.to_f)
  end
end
