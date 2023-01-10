﻿# Cryptons

It takes a lot of work to execute multiple transactions to various individuals and go through the tedious procedure of gathering every wallet address in order to send token for any purposes. We came up with a special solution for this. Cryptons will convert your token into a single multi-claimable coupon / multiple coupons of the specified value, together with an easily shareable link and QR code. With getting rid of the necessity for the sender to batch many transactions, we make it simple for any user to submit a gasless claim with just one click.

The coupon code are completely private, as they are custom generated based on user given alpha numeric string, getting hased by SHA256. Only the hashed coupon code is getting stored for associating the value of coupon, no centralised storage for coupon codes and a set validity of coupons, after which the issuer can reclaim the tokens if it reamined unclaimed,
Also we're perfoming multiple checks to not overdistribute multiple claims to single user, by using multiple checks by frontend, api, and on contect view functions.

So we're releaving the burden of the sender and making it convienient for recievers as well, as they can claim it to their desired wallet without paying any gas fees.

Polygon deployed Contract:
0x759Ce4A6ED160b3076FE0edB6f842ba6B4055db1

Deployment Link vercel:

https://cryptons.vercel.app
