#add the tax to price

abq_tax = 0.5125

cart_containns =["Toothbrush", "Jacket", "Drone"]

cart_prices =[1.50, 42.99, 75.56]

cart_prices.each do |price|
  full_price = price*(1+abq_tax)
  puts full_price
end


puts full_price