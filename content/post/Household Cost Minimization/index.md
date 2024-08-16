---
title: Cost Minimization for EV owner
date: 2024-08-06
summary: Explore how to properly use your smart charging device!
---
<p style="text-align: justify;"><strong>Disclaimer: </strong>This blog post delves into the cost benefits of a smart charging application. To avoid building a narrow-minded opinion, it is crucial to understand which components are genuinely part of "smart charging." To refresh your knowledge, you can read the introductory explanation of smart charging here.</p>
<p style="text-align: justify;"><strong>Abstract: </strong>Soon, households may face time-dependent electricity prices, based on the day-ahead price of their respective bidding zone. At the same time, more and more households own an electric vehicle. Since vehicle owners have some flexibility in when to recharge the vehicle, they can adopt cost-minimizing (smart) charging applications. The resulting costs of these highly depend on when the vehicle owner plugs in the vehicle. Therefore, we define different charging strategies and compare their resulting costs for 2020 &ndash; 2023. Results from one German electricity market show that through all the years, using a smart charging application overnight results in the lowest costs, when charging on any given day of the week. However, solely focusing on Sundays results in even lower costs. I also provide numerical results for France, Spain, UK, and Norway 1.</p>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;"><strong>Introduction</strong></p>
<p style="text-align: justify;">With the emerging trends of electric vehicles, rising energy prices, and the adoption of smart meters, more and more European households hold electricity contracts in which they pay a time-dependent electricity price. Typically, this time-dependent price is based on the day-ahead market price of electricity in the bidding zone the household is located in. This price is set through daily auctions for various zones in Europe. Each zone holds a daily auction to determine prices based on supply and demand. These time-dependent prices allow smart charging applications to optimize charging costs. Besides the electricity price, consumers also pay grid fees, taxes, and other charges, which vary by country and zone. This article does not consider such levies. While the smart charging application schedules the charging times of the EV once it is plugged in, the EV owner must decide when and for how long to plug in the vehicle. This decision is crucial, as it can significantly impact the cost of charging. &nbsp;This article aims to answer the following questions.</p>
<p style="text-align: justify;"><strong><em>How can a myopic EV owner decrease the cost of charging?</em></strong></p>
<p style="text-align: justify;">I answer this question in this article, where I 1) show how a myopic EV owner behaves, 2) show how a cost-minimizing charging application can be modeled, 3) give an overview of day-ahead electricity prices in Germany (2020 - 2023), 4) show and analyzing the results, and lastly 5) show the data for other European countries.</p>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;"><strong>The behavior of a myopic EV owner</strong></p>
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
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;"><strong>Optimizing the charging schedule - Smart Charging </strong></p>
<p style="text-align: justify;">I assume the smart charging strategy schedules charging times to the lowest electricity costs within the time horizon when the EV is connected to the charger.&nbsp; This approach assumes that the charging scheduling algorithm has prior knowledge of the EV's departure time. While this is a strict assumption, two factors support its validity: (1) Most individuals have consistent daily routines, leading to predictable schedules, and (2) Advanced charging devices often prompt users to specify their planned unplugging time, ensuring that this information is available.</p>
<p style="text-align: justify;">The image below illustrates how smart charging makes use of time-dependent electricity prices. The black line shows the electricity price in ct/kWh and the dotted lines show the power an EV is charging with either the Plug-and-Charge or the Smart-Night charging strategy. While the Plug-and-Charge strategy always charges from 18:00 onwards, the smart strategy will adapt to different price scenarios. &nbsp;On this example day (11.04.2023 to 12.04.2024), smart charging at night results in an average price of 7.9 ct/kWh and plug-and-charge in 14.0 ct/kWh.</p>
<p style="text-align: justify;"><strong>Summary of the Method</strong></p>
<p style="text-align: justify;">I keep this summary in bullet points to have comprehensive takeaways.</p>
<ul style="text-align: justify;">
<li>We analyze an average EV owner</li>
<li>The EV owner travels 13.000 km yearly, consuming 0.175 kWh/km</li>
<li>The EV owner recharges every 2.5 days</li>
<li>There are 2 main types of charging strategies: Smart and Plug-and-Charge</li>
<li>Within the smart strategies, EV owners have different behaviors which differ in the plug-in time of their car</li>
<li>The smart strategies use an 11 kW wallbox</li>
<li>The plug-and-charge strategy uses a 2.3 kW socket</li>
</ul>
<p style="text-align: justify;"><strong>&nbsp;</strong></p>
<p style="text-align: justify;"><strong>Data: Day-ahead electricity prices in Germany/Luxemburg</strong></p>
<p style="text-align: justify;">Since I want to analyze more than a short time horizon of one year, I will use electricity price data from 2020 to 2023. Since EVs can not delay their charging activities over weeks or even months, I will not look at seasonal patterns, but daily and weekly patterns. The image below shows the normalized electricity price for each hour of the day, starting and ending at midnight. Normalized price means, it is the price divided by the average price of the year. For instance, at 12:00 (noon) in 2023, the average price was only 80% of the average price in 2023. In 2022, the average price at 12:00 was 85% of the average price in 2022.&nbsp; This does not mean 1) that every day at noon the price was 85% of the average price and 2) the average price at noon in 2022 was higher than in 2023. However, I use this illustration to show the development of the overall price pattern. One can see that the normalized electricity price throughout the night, has increased over the years. At the same time, the normalized price throughout the afternoon has decreased.</p>
<p style="text-align: justify;">As this only shows the daily pattern, electricity prices often also differ between weekdays and weekends. This is mostly due to different demands since most people's daily pattern differs between weekdays and weekends. In addition to that, most industries also consume less energy during weekends. Let us have a look at the normalized price over the week, starting Monday at 00:00.&nbsp;</p>
<p style="text-align: justify;">The solid grey lines show the beginning of a new day (midnight) and the dashed grey lines show the noon of the day. This image reveals that prices on weekends tend to be lower than on weekdays, especially on Sunday afternoons prices reach a weekly low. Please be aware that this is only the data from Germany/Luxemburg.</p>
<p style="text-align: justify;"><strong>Results of the Analysis</strong></p>
<p style="text-align: justify;">I ran all 4 different charging strategies and now show the different electricity prices resulting from each strategy. I also show the average electricity price on the day-ahead market for the year. The image below also includes the actual numbers rounded to 0 digits after the decimal point. The influence of the normalized price curve is evident in the resulting electricity costs for each charging strategy.</p>
<p style="text-align: justify;">While plug-and-charge consumes electricity at price peak times, it also always results in greater than average prices. On the contrary, utilizing low prices during the night results in lower prices. While this may not matter so much in 2020 with a low difference between the Smart-Night and plug-and-charge strategy (Difference: 1.5 ct/kWh), it sure did during the energy crisis in 2022 (Difference: 8.4 ct/kWh).</p>
<p style="text-align: justify;">Next to the straightforward strategies, that charge on any given day of the week, the Sunday focusing strategy continuously results in the lowest electricity prices.&nbsp; To be fair, this strategy also has the largest time horizon in which low electricity prices may occur since it covers the time horizon of two nights and a whole day. So, let us have a look at an image that shows when this car charges. &nbsp;It reveals that this is a valid argument.&nbsp; Charging activities are mainly scheduled for Saturday night, Sunday afternoon, and Sunday night.</p>
<p style="text-align: justify;">This may be a long unrealistic time horizon, therefore let us split the Smart-Sunday strategy into 3 strategies, called Smart-Saturday-Night (22:00 &ndash; 07:00), Smart-Sunday-Afternoon (12:00 &ndash; 17:00), and Smart-Sunday-Night (22:00-07:00). The image below shows the results.</p>
<p style="text-align: justify;">The results indicate that applying smart charging during Sunday afternoons yields the lowest costs. Nevertheless, all other strategies result in costs that are lower than or equal to those associated with the smart daily night charging strategy. This shows that charging on Sundays is a considerable alternative to decrease charging costs on the day ahead market in Germany.</p>
<p style="text-align: justify;"><strong>Conclusion</strong></p>
<p style="text-align: justify;">Before the conclusion, one important note. This analysis only covers the price of electricity, it does not cover any other costs such as grid fees, taxes, or other levies. It does also not account for any other impact the charging decision may cause such as impacts on the grid or the lifetime of the battery. I keep the conclusion in bullet points to have comprehensive takeaways.</p>
<ul style="text-align: justify;">
<li>Soon, households may face time-dependent electricity prices</li>
<li>Households can apply several strategies to recharge their vehicle to minimize charging costs</li>
<li>I define different strategies, which differ in the time horizon the EV is connected to the grid and the adaption to the price (&ldquo;smart&rdquo;)</li>
<li>I run an analysis from 2020 to 2023 using German day-ahead prices</li>
<li>Smart charging strategies result in lower costs than plug-and-charge</li>
<li>From the daily charging strategies, charging at night results in the lowest cost</li>
<li>From all charging strategies, charging on Sundays results in the lowest charging costs</li>
</ul>
<p style="text-align: justify;"><strong>Results for other Zones</strong></p>
<p style="text-align: justify;">&nbsp;</p>
