class Element 
  def initialize(name, atomic_number, boiling_point)
    @name = name
    @atomic_number = atomic_number
    @boiling_point = boiling_point
  end
  
  def name
    @name
  end
  
  def atomic_number
    @atomic_number
  end
  
  def boiling_point
    @boiling_point
  end
  
end
  
  puts hydrogen = Element.new("Hydrogen", 1, -423)
  puts hydrogen.atomic_number
  puts hydrogen.boiling_point