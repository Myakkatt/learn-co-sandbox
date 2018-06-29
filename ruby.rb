class Element 
  def initialize(name, atomic number)
    @name = name
    @atomic_number = atomic_number
    
  end
  
  def name
    @name
  end
  
  def atomic_number
    @atomic_number
  end
end
  
  puts hydrogen = Element.new("Hydrogen", 1)
  
