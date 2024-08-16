---
title: Cost Minimization for EV owner
date: 2024-08-06
summary: Explore how to properly use your smart charging device!
---
<div style="text-align: justify;">

#### Disclaimer

This blog post delves into the cost benefits of a smart charging application. To avoid building a narrow-minded opinion, it is crucial to understand which components are genuinely part of smart charging. To refresh your knowledge, you can read the introductory explanation of smart charging here.

#### Abstract

Soon, households may face time-dependent electricity prices, based on the day-ahead price of their respective bidding zone. At the same time, more and more households own an electric vehicle. Since vehicle owners have some flexibility in when to recharge the vehicle, they can adopt cost-minimizing (smart) charging applications. The resulting costs of these highly depend on when the vehicle owner plugs in the vehicle. Therefore, we define different charging strategies and compare their resulting costs for 2020 – 2023. Results from one German electricity market show that through all the years, using a smart charging application overnight results in the lowest costs, when charging on any given day of the week. However, solely focusing on Sundays results in even lower costs. I also provide numerical results for France, Spain, UK, and Norway 1.

### Introduction

With the emerging trends of electric vehicles, rising energy prices, and the adoption of smart meters, more and more European households hold electricity contracts in which they pay a time-dependent electricity price. Typically, this time-dependent price is based on the day-ahead market price of electricity in the bidding zone the household is located in. This price is set through daily auctions for various zones in Europe. Each zone holds a daily auction to determine prices based on supply and demand. These time-dependent prices allow smart charging applications to optimize charging costs. Besides the electricity price, consumers also pay grid fees, taxes, and other charges, which vary by country and zone. This article does not consider such levies. While the smart charging application schedules the charging times of the EV once it is plugged in, the EV owner must decide when and for how long to plug in the vehicle. This decision is crucial, as it can significantly impact the cost of charging.  This article aims to answer the following questions.


**How can a myopic EV owner decrease the cost of charging?**


I answer this question in this article, where I 1) show how a myopic EV owner behaves, 2) show how a cost-minimizing charging application can be modeled, 3) give an overview of day-ahead electricity prices in Germany (2020 - 2023), 4) show and analyzing the results, and lastly 5) show the data for other European countries.

### The behavior of a myopic EV owner
I assume a myopic EV owner does not pay attention to electricity prices. This may be a strong assumption, given that the EV owner is facing time-dependent electricity prices. However, I assume the EV owner's knowledge and interest in the electricity market is limited. The EV owner cares more about the remaining range of the vehicle, in order to be able to use it on the next day. Therefore, the EV owner is just an entity that enables a connection between the EV and the charging application at predefined time horizons. The actual scheduling and charging of the EV are done by the smart charging application. Therefore, I define different EV owner behavior, they define the plug-in time of the EV. In addition to the smart charging strategies, I also define the plug-and-charge strategy, where the EV owner comes home and simply plugs in the vehicle to start charging immediately.  I also define one special strategy, recharging on Sundays. This represents a car-free Sunday, where the car is connected to the charging station every Saturday from 22 o'clock until Monday morning at 7 o'clock.

<img src="Images/Strategies.png" alt="Strategies" style="max-width: 99%; height: auto;">

### Optimizing the charging schedule - Smart Charging 
</div>
