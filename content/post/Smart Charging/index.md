---
title: Introduction to Smart Charging
date: 2024-08-04
summary: This article explains the fundamental components of smart charging!
---
Smart charging can be understood in various ways, and different authors have their own definitions. It is influenced by the **design of the electricity market**, the technical characteristics of the **electricity grid**, and the **EV owner's capacity to offer flexibility**. We will explore these three components in the following sections.

## Design of the electricty market                                                                                                                                                                               
Electricty can be traded on different power exchange markets, for different bidding zones and different time slots. Most smart charging applications focus on the day ahead market. On this market electricty producer and consumer can submit bids for each hour of the following trading day. Producer submit bids in the form of an amount of electricty, a price for that amount and a hour of delivery. Consumer submit bids in the same form but they do not want to deliver they want to consume. The bids have to be submitted to the market until gate closure (in most markets around noon). After the gate closure time, the power exchange market determines the demand curve from producer orders and the supply curve from consumer orders for each delivery period. The intersection of these curves represents the market clearing price, which applies to all accepted buy and sell orders. Buy orders with prices at or above the market clearing price are accepted, as are sell orders with prices at or below it. This process ensures transparency and fairness for all market participants. Once market results are confirmed, all accepted buy and sell orders become binding transactions, which are then cleared and settled by the clearing service providers. The image below illustrates the clearing process. <br>
![Market Clearing Diagram](/images/Market%20clearing%20day%20ahead.png)
The blue blocks represent electricity producer bids, where the height indicates the price they are willing to accept and the width represents the amount of electricity they are willing to produce. Together, these blocks form the supply curve, which shows the relationship between supply and price.
The green blocks represent consumer bids, with the height indicating the price they are willing to pay and the width representing the amount they want to purchase. Combined, these blocks form the demand curve, which shows the relationship between demand and price.
The point where these two curves intersect (indicated by the yellow lightning bolt) is called the equilibrium. At this point, the market clearing price is determined, balancing supply and demand. The same amount of electricity is sold by producers as is bought by consumers.
All supply bids with prices below the equilibrium price are accepted, as are all demand bids with prices at or above the equilibrium price. Consequently, all producers receive at least the price they were willing to accept, and all consumers pay no more than the price they were willing to pay. This results in an efficient and fair outcome for both parties.
Matching supply and demand occurs for each hour of the day, resulting in 24 distinct market outcomes daily. This means there can be a different price for each hour, influenced by factors such as varying demand (e.g., higher electricity consumption by private households in the morning and evening) and fluctuating supply (e.g., increased solar power on sunny summer days). By leveraging these price differences, a simple smart charging strategy can effectively minimize charging costs.

## Electricty Grid
lorem ipsum
## EV owner flexibility
lorem iosum
