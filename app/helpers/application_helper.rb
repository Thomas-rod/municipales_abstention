module ApplicationHelper
  def register_number(departments)
    register_counter = 0
    departments.each do |d|
      register_counter += d.register
    end
    return register_counter
  end

  def vote_percentage(departments)
    abstention_counter = 0
    register_counter = 0
    departments.each do |d|
      abstention_counter += d.abstention
      register_counter += d.register
    end
    return (((register_counter.to_f - abstention_counter.to_f)/register_counter.to_f)*100).round
  end

  def abstention_percentage(departments)
    abstention_counter = 0
    register_counter = 0
    departments.each do |d|
      abstention_counter += d.abstention
      register_counter += d.register
    end
    return (((abstention_counter.to_f)/register_counter.to_f)*100).round
  end


end
