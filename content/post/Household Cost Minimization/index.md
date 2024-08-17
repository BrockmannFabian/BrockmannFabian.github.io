---
title: Cost Minimzation for commuter EVs
date: 2024-08-16
summary: Explore!
---
<p style="text-align: justify;"><strong>Abstract: </strong>Soon, households may face time-dependent electricity prices, based on the day-ahead price of their respective bidding zone. At the same time, more and more households own an electric vehicle. Since vehicle owners have some flexibility in when to recharge the vehicle, they can adopt cost-minimizing (smart) charging applications. The resulting costs of these highly depend on when the vehicle owner plugs in the vehicle. Therefore, we define different charging strategies and compare their resulting costs for 2020 &ndash; 2023. Results from one German electricity market show that through all the years, using a smart charging application overnight results in the lowest costs, when charging on any given day of the week. However, solely focusing on Sundays results in even lower costs. I also provide numerical results for France, Spain, UK, and Norway 1.</p>
<p style="text-align: justify;">&nbsp;</p>
<h2 style="text-align: justify;"><strong>Introduction</strong></h2>
<p style="text-align: justify;">With the emerging trends of electric vehicles, rising energy prices, and the adoption of smart meters, more and more European households hold electricity contracts in which they pay a time-dependent electricity price. Typically, this time-dependent price is based on the day-ahead market price of electricity in the bidding zone the household is located in. This price is set through daily auctions for various zones in Europe. Each zone holds a daily auction to determine prices based on supply and demand. These time-dependent prices allow smart charging applications to optimize charging costs. Besides the electricity price, consumers also pay grid fees, taxes, and other charges, which vary by country and zone. This article does not consider such levies. While the smart charging application schedules the charging times of the EV once it is plugged in, the EV owner must decide when and for how long to plug in the vehicle. This decision is crucial, as it can significantly impact the cost of charging. &nbsp;This article aims to answer the following questions.</p>
<p style="text-align: justify;"><strong><em>How can a myopic EV owner decrease the cost of charging?</em></strong></p>
<p style="text-align: justify;">I answer this question in this article, where I 1) show how a myopic EV owner behaves, 2) show how a cost-minimizing charging application can be modeled, 3) give an overview of day-ahead electricity prices in Germany (2020 - 2023), 4) show and analyzing the results, and lastly 5) show the data for other European countries.</p>
<p style="text-align: justify;">&nbsp;</p>
<h2 style="text-align: justify;"><strong>The behavior of a myopic EV owner</strong></h2>
<p style="text-align: justify;">I assume a myopic EV owner does not pay attention to electricity prices. This may be a strong assumption, given that the EV owner is facing time-dependent electricity prices. However, I assume the EV owner's knowledge and interest in the electricity market is limited. The EV owner cares more about the remaining range of the vehicle, in order to be able to use it on the next day. Therefore, the EV owner is just an entity that enables a connection between the EV and the charging application at predefined time horizons. The actual scheduling and charging of the EV are done by the smart charging application. Therefore, I define different EV owner behavior, they define the plug-in time of the EV. In addition to the smart charging strategies, I also define the plug-and-charge strategy, where the EV owner comes home and simply plugs in the vehicle to start charging immediately. &nbsp;I also define one &ldquo;special&rdquo; strategy, recharging on Sundays. This represents a car-free Sunday, where the car is connected to the charging station every Saturday from 22:00 until Monday morning at 07:00.</p>
<table>
<tbody>
<tr>
<td width="185">
<p><strong>Strategy</strong></p>
</td>
<td width="185">
<p><strong>Plug-in time</strong></p>
</td>
</tr>
<tr>
<td width="185">
<p>Plug-and-Charge</p>
</td>
<td width="185">
<p>18:00 &ndash; 07:00</p>
</td>
</tr>
<tr>
<td width="185">
<p>Smart-Night</p>
</td>
<td width="185">
<p>22:00 &ndash; 07:00</p>
</td>
</tr>
<tr>
<td width="185">
<p>Smart-Worktime</p>
</td>
<td width="185">
<p>08:00 &ndash; 17:00</p>
</td>
</tr>
<tr>
<td width="185">
<p>Smart-Sundays</p>
</td>
<td width="185">
<p>Sat. 22:00 &ndash; Mond. 07:00</p>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;">Since there is some inconvenience in enabling the connection between the charger and the vehicle, people tend to charge not every day. As there is good data quality about Norwegian EV owners and they already face time-dependent electricity prices, I will use their behavior. In Norway, the average EV owner charges their vehicle every 2 &ndash; 3 days and travels about 13.000 km per year. Therefore, the EV owner plugs in the EV every ~2.5 days to recharge an amount of 13.000 km * 0.175 kWh/km / 365 days * 2.5 days = 15.6 kWh. The Smart-Sunday strategy has to recharge 43.6 kWh.</p>
<p style="text-align: justify;">Charging is done with a typical 11 kW wallbox. However, for the plug-and-charge strategy, I assume a regular 2.3 kW socket is used instead of a wallbox. This is because investing in a wallbox without leveraging its full capabilities does not appear to be rational.</p>
<p style="text-align: justify;">&nbsp;</p>
<h2 style="text-align: justify;"><strong>Optimizing the charging schedule - Smart Charging </strong></h2>
<p style="text-align: justify;">I assume the smart charging strategy schedules charging times to the lowest electricity costs within the time horizon when the EV is connected to the charger.&nbsp; This approach assumes that the charging scheduling algorithm has prior knowledge of the EV's departure time. While this is a strict assumption, two factors support its validity: (1) Most individuals have consistent daily routines, leading to predictable schedules, and (2) Advanced charging devices often prompt users to specify their planned unplugging time, ensuring that this information is available.</p>
<p style="text-align: justify;">The image below illustrates how smart charging makes use of time-dependent electricity prices. The black line shows the electricity price in ct/kWh and the dotted lines show the power an EV is charging with either the Plug-and-Charge or the Smart-Night charging strategy. While the Plug-and-Charge strategy always charges from 18:00 onwards, the smart strategy will adapt to different price scenarios. &nbsp;On this example day (11.04.2023 to 12.04.2024), smart charging at night results in an average price of 7.9 ct/kWh and plug-and-charge in 14.0 ct/kWh.</p>
