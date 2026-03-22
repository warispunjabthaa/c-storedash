const PEPSI_ITEMS = [
  {
    "name": "Mountain Dew",
    "sku": "3120",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "3130",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Mountain Dew - 2l Bottle (8ct)"
  },
  {
    "name": "Pepsi (4/6 Packs)",
    "sku": "3017",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "012000171765",
    "full_name": "Pepsi (4/6 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "3155",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Mountain Dew - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "3660",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Dr Pepper - 2l Bottle (8ct)"
  },
  {
    "name": "Caffeine Free Pepsi",
    "sku": "3194",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "012000171741",
    "full_name": "Caffeine Free Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Mug Root Beer",
    "sku": "3172",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Mug Root Beer - 2l Bottle (8ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "3685",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Dr Pepper - 2l Bottle (8ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "3683",
    "category": "Soft Drinks",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 16oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "3824",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "3811",
    "category": "Soft Drinks",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 10oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "4783",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "012000001291",
    "full_name": "Pepsi Wild Cherry - 2l Bottle (8ct)"
  },
  {
    "name": "Pepsi (Premix)",
    "sku": "5240",
    "category": "Soft Drinks",
    "pkg_size": "5gal Tank",
    "case_qty": "1",
    "upc": "012000030284",
    "full_name": "Pepsi (Premix) - 5gal Tank (1ct)"
  },
  {
    "name": "Dr Pepper (Fountain)",
    "sku": "3689",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dr Pepper (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Pepsi (Fountain)",
    "sku": "5247",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "012000025396",
    "full_name": "Diet Pepsi (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi",
    "sku": "5689",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "20",
    "upc": "012000002304",
    "full_name": "Pepsi - 12oz Can (20ct)"
  },
  {
    "name": "Mountain Dew (Fountain)",
    "sku": "5252",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mountain Dew (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "5867",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "012000001294",
    "full_name": "Diet Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "5876",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "5866",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "012000140709",
    "full_name": "Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "5877",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 20oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "8729",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "012000005596",
    "full_name": "Diet Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Pepsi",
    "sku": "9776",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "012000003110",
    "full_name": "Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Mug Root Beer (Fountain)",
    "sku": "15089",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mug Root Beer (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi (Fountain)",
    "sku": "5242",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "012000018800",
    "full_name": "Pepsi (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Pepsi (24pk Cube)",
    "sku": "16789",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi (24pk Cube)",
    "sku": "16788",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper (24pk Cube)",
    "sku": "17207",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Mountain Dew (24pk Cube)",
    "sku": "19117",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Dr Pepper (24pk Cube)",
    "sku": "19459",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew (Cube)",
    "sku": "16791",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew (Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "19519",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "19553",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 20oz Bottle (24ct)"
  },
  {
    "name": "Mug Root Beer",
    "sku": "19685",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi (36pk Cube)",
    "sku": "19716",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Pepsi (36pk Cube) - 12oz Can (36ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "31104",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "32448",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Mountain Dew - 12oz Can (36ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "32575",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "32765",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 1l Bottle (15ct)"
  },
  {
    "name": "Diet Dr Pepper (Fountain)",
    "sku": "33352",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Diet Dr Pepper (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi Wild Cherry (Fountain)",
    "sku": "34018",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pepsi Wild Cherry (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Mountain Dew (Fountain)",
    "sku": "33937",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Diet Mountain Dew (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Dr Pepper (36pk Cube)",
    "sku": "58488",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Dr Pepper (36pk Cube) - 12oz Can (36ct)"
  },
  {
    "name": "Pepsi",
    "sku": "59942",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Pepsi - 1l Bottle (15ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "59956",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew - 1l Bottle (15ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "66562",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "67543",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 2l Bottle (8ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "82037",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "82039",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi (2/12 Packs)",
    "sku": "83774",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi (2/12 Packs)",
    "sku": "83775",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew (2/12 Packs)",
    "sku": "83776",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "83778",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 12oz Can (24ct)"
  },
  {
    "name": "Diet Mountain Dew (2/12 Packs)",
    "sku": "83777",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry (2/12 Packs)",
    "sku": "83779",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Mug Root Beer (2/12 Packs)",
    "sku": "83780",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Caffeine Free Pepsi (2/12 Packs)",
    "sku": "83782",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Caffeine Free Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Mug Root Beer Zero Sugar",
    "sku": "83787",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi Wild Cherry (2/12 Packs)",
    "sku": "83797",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi Wild Cherry (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper (2/12 Packs)",
    "sku": "84940",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Dr Pepper (2/12 Packs)",
    "sku": "84941",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Live Wire",
    "sku": "85028",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Live Wire - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Live Wire (2/12 Packs)",
    "sku": "85332",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Live Wire (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale (2/12 Packs)",
    "sku": "86536",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "86609",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 24oz Bottle (24ct)"
  },
  {
    "name": "Pepsi (4/6 Packs)",
    "sku": "87672",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "88717",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "88718",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Diet Dr Pepper (36pk Cube)",
    "sku": "88896",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Diet Dr Pepper (36pk Cube) - 12oz Can (36ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "92327",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "94636",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 24oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "102979",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "102981",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 2l Bottle (8ct)"
  },
  {
    "name": "Pepsi Zero Sugar (24pk Cube)",
    "sku": "103877",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar (2/12 Packs)",
    "sku": "102982",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "105444",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 12oz Bottle (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "105526",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Diet Mountain Dew - 1l Bottle (15ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "105528",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Dr Pepper - 1l Bottle (15ct)"
  },
  {
    "name": "Mountain Dew Voltage Raspberry Citrus (2/12 Packs)",
    "sku": "106760",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Voltage Raspberry Citrus (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Voltage Raspberry Citrus",
    "sku": "106751",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Voltage Raspberry Citrus - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "109525",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "109533",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Made With Real Sugar",
    "sku": "120068",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Made With Real Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Made With Real Sugar (2/12 Packs)",
    "sku": "120070",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Made With Real Sugar (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange (Fountain)",
    "sku": "120133",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "889392000313",
    "full_name": "Crush Orange (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "120341",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 12oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "120342",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 12oz Bottle (24ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "120346",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper - 12oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "121348",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar (4/6 Packs)",
    "sku": "121347",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "125007",
    "category": "Soft Drinks",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 16oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "125011",
    "category": "Soft Drinks",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 16oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "132258",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew - 16oz Can (12ct)"
  },
  {
    "name": "Pepsi",
    "sku": "132261",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi - 16oz Can (12ct)"
  },
  {
    "name": "Crush Grape",
    "sku": "133043",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Grape - 12oz Can (24ct)"
  },
  {
    "name": "Crush Grape",
    "sku": "133045",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Grape - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "133060",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Orange - 2l Bottle (8ct)"
  },
  {
    "name": "Crush Grape",
    "sku": "133047",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Grape - 2l Bottle (8ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "133065",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange (Cube)",
    "sku": "133073",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange (Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "133064",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Strawberry",
    "sku": "133102",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Strawberry - 2l Bottle (8ct)"
  },
  {
    "name": "Crush Pineapple",
    "sku": "133089",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Pineapple - 2l Bottle (8ct)"
  },
  {
    "name": "Crush Strawberry",
    "sku": "133103",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Strawberry - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange Zero Sugar",
    "sku": "133110",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "133205",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Crush Strawberry",
    "sku": "133107",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Strawberry - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Kickstart Orange Citrus",
    "sku": "137570",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Orange Citrus - 16oz Can (12ct)"
  },
  {
    "name": "Mountain Dew Kickstart Black Cherry",
    "sku": "142070",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Black Cherry - 16oz Can (12ct)"
  },
  {
    "name": "Pepsi Wild Cherry (4/6 Packs)",
    "sku": "143890",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "144370",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dr Pepper - 16oz Can (12ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "144963",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 16oz Can (12ct)"
  },
  {
    "name": "Flavor Works Strawberry Flavor Shots",
    "sku": "149029",
    "category": "Soft Drinks",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Flavor Works Strawberry Flavor Shots - 1gal Bag In Box (1ct)"
  },
  {
    "name": "Flavor Works Cherry Flavor Shots",
    "sku": "149028",
    "category": "Soft Drinks",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Flavor Works Cherry Flavor Shots - 1gal Bag In Box (1ct)"
  },
  {
    "name": "Flavor Works Vanilla Flavor Shots",
    "sku": "149030",
    "category": "Soft Drinks",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Flavor Works Vanilla Flavor Shots - 1gal Bag In Box (1ct)"
  },
  {
    "name": "Mug Root Beer",
    "sku": "149623",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Flavor Works Lemon Flavor Shots",
    "sku": "149031",
    "category": "Soft Drinks",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Flavor Works Lemon Flavor Shots - 1gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi",
    "sku": "151568",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi - 1.25l Bottle (12ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "151572",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew - 1.25l Bottle (12ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "151578",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dr Pepper - 1.25l Bottle (12ct)"
  },
  {
    "name": "Pepsi",
    "sku": "3028",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Pepsi - 1l Bottle (15ct)"
  },
  {
    "name": "Diet Mountain Dew (4/6 Packs)",
    "sku": "3149",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew (4/6 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Big Red (Fountain)",
    "sku": "3499",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Big Red (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Crush Orange (Fountain)",
    "sku": "3609",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Crush Orange (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Dr Pepper (Fountain)",
    "sku": "3664",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Diet Dr Pepper (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Dr Pepper (4/6 Packs)",
    "sku": "3677",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper (4/6 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Zero Sugar Ginger Ale",
    "sku": "3803",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Schweppes Zero Sugar Ginger Ale - 2l Bottle (8ct)"
  },
  {
    "name": "Squirt",
    "sku": "3986",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Squirt - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Raspberry Ginger Ale",
    "sku": "4768",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Schweppes Raspberry Ginger Ale - 2l Bottle (8ct)"
  },
  {
    "name": "Pepsi",
    "sku": "4927",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Mug Root Beer (Fountain)",
    "sku": "5265",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mug Root Beer (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Mountain Dew (Fountain)",
    "sku": "5144",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Diet Mountain Dew (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "5873",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "5874",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "6110",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 12oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "6319",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew - 1l Bottle (15ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "6430",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 20oz Bottle (24ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "7460",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "7107",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Dr Pepper - 1l Bottle (15ct)"
  },
  {
    "name": "Squirt",
    "sku": "7865",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Squirt - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "8383",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Mug Root Beer",
    "sku": "9567",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "18453",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "18628",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 20oz Bottle (24ct)"
  },
  {
    "name": "Squirt (24pk Cube)",
    "sku": "19677",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Squirt (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi (36pk)",
    "sku": "19789",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Pepsi (36pk) - 12oz Can (36ct)"
  },
  {
    "name": "Schweppes Ginger Ale (Fountain)",
    "sku": "19951",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Schweppes Ginger Ale (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Schweppes Ginger Ale (24pk Cube)",
    "sku": "30042",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry (Fountain)",
    "sku": "30930",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pepsi Wild Cherry (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Schweppes Tonic",
    "sku": "30975",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Tonic - 1l Bottle (15ct)"
  },
  {
    "name": "Big Red",
    "sku": "31284",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Big Red - 2l Bottle (8ct)"
  },
  {
    "name": "Big Red",
    "sku": "31535",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Big Red - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry (24pk Cube)",
    "sku": "31853",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "32238",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 24oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "32240",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 24oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew (Fountain)",
    "sku": "32372",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mountain Dew (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi (Fountain)",
    "sku": "32719",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pepsi (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "32721",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 24oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi (Fountain)",
    "sku": "32973",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Diet Pepsi (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi",
    "sku": "34637",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "60977",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 1l Bottle (15ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "61689",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Diet Mountain Dew - 1l Bottle (15ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "66561",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Code Red (Fountain)",
    "sku": "67938",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mountain Dew Code Red (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi (4/6 Packs)",
    "sku": "81295",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew (4/6 Packs)",
    "sku": "81299",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "81302",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry (4/6 Packs)",
    "sku": "84355",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Squirt (2/12 Packs)",
    "sku": "84952",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Squirt (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Big Red (2/12 Packs)",
    "sku": "88971",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Big Red (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi (2/12 Packs)",
    "sku": "88991",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Zero Sugar Ginger Ale",
    "sku": "89057",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Zero Sugar Ginger Ale - 12oz Can (24ct)"
  },
  {
    "name": "Manzanita Sol Apple (2/12 Packs)",
    "sku": "95085",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Manzanita Sol Apple (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Manzanita Sol Apple",
    "sku": "95086",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Manzanita Sol Apple - 20oz Bottle (24ct)"
  },
  {
    "name": "Manzanita Sol Apple",
    "sku": "95087",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Manzanita Sol Apple - 2l Bottle (8ct)"
  },
  {
    "name": "Mountain Dew Live Wire",
    "sku": "99678",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Live Wire - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "99801",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 1l Bottle (15ct)"
  },
  {
    "name": "A&W Cream Soda (2/12 Packs)",
    "sku": "101222",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "A&W Cream Soda (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "102157",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 12oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "102160",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 12oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "102159",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 12oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "102181",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 12oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "103512",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Citrus Cherry LTO",
    "sku": "103883",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Citrus Cherry LTO - 12oz Can (24ct)"
  },
  {
    "name": "Manzanita Sol Apple (Fountain)",
    "sku": "103871",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Manzanita Sol Apple (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Mountain Dew Citrus Cherry LTO",
    "sku": "104223",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Citrus Cherry LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "105527",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 1l Bottle (15ct)"
  },
  {
    "name": "Mountain Dew Voltage Raspberry Citrus",
    "sku": "107055",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Voltage Raspberry Citrus - 20oz Bottle (24ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "107723",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper - 12oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "107724",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 12oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "109524",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 2l Bottle (8ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "109526",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Manzanita Sol Apple",
    "sku": "120199",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Manzanita Sol Apple - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Strawberry (Fountain)",
    "sku": "120564",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Crush Strawberry (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi Made With Real Sugar",
    "sku": "122683",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Made With Real Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Zero Sugar Ginger Ale",
    "sku": "122762",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Zero Sugar Ginger Ale - 1l Bottle (15ct)"
  },
  {
    "name": "Pepsi Zero Sugar (Fountain)",
    "sku": "122799",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pepsi Zero Sugar (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Diet Dr Pepper (Fountain)",
    "sku": "125682",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Diet Dr Pepper (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Schweppes Zero Sugar Ginger Ale",
    "sku": "126658",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Zero Sugar Ginger Ale - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "126657",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 7.5oz Can (24ct)"
  },
  {
    "name": "Big Red (24pk Cube)",
    "sku": "127852",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Big Red (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Raspberry Ginger Ale (2/12 Packs)",
    "sku": "129034",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Raspberry Ginger Ale (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Crush Grape",
    "sku": "133044",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Grape - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "133063",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Orange (36pk Cube)",
    "sku": "133074",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Crush Orange (36pk Cube) - 12oz Can (36ct)"
  },
  {
    "name": "Crush Peach",
    "sku": "133078",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "889392010015",
    "full_name": "Crush Peach - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Peach",
    "sku": "133079",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "889392010190",
    "full_name": "Crush Peach - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "133075",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Crush Peach",
    "sku": "133080",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Peach - 12oz Can (24ct)"
  },
  {
    "name": "Crush Peach",
    "sku": "133083",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Peach - 2l Bottle (8ct)"
  },
  {
    "name": "Crush Pineapple",
    "sku": "133090",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Pineapple - 12oz Can (24ct)"
  },
  {
    "name": "Crush Strawberry",
    "sku": "133105",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Strawberry - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "142878",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "142909",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast (2/12 Packs)",
    "sku": "142880",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "144369",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Crush Orange - 16oz Can (12ct)"
  },
  {
    "name": "Crush Grape",
    "sku": "149523",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Grape - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Crush Strawberry",
    "sku": "149526",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Strawberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "150083",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 16oz Can (12ct)"
  },
  {
    "name": "Mountain Dew Voltage Raspberry Citrus",
    "sku": "150106",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew Voltage Raspberry Citrus - 1l Bottle (15ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "151579",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Crush Orange - 1.25l Bottle (12ct)"
  },
  {
    "name": "Crush Grape",
    "sku": "152717",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Crush Grape - 16oz Can (12ct)"
  },
  {
    "name": "Mountain Dew (2/12 Packs)",
    "sku": "157835",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Kosher",
    "sku": "160638",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pepsi Kosher - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Pepsi Kosher",
    "sku": "160643",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Pepsi Kosher - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "151586",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 1.25l Bottle (12ct)"
  },
  {
    "name": "Big Blue",
    "sku": "138264",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Big Blue - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "133629",
    "category": "Soft Drinks",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 16oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "120343",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 12oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew (4/6 Packs)",
    "sku": "87668",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "161894",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "160589",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 7.5oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "160590",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "160593",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 7.5oz Can (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "160591",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 7.5oz Can (24ct)"
  },
  {
    "name": "Pepsi Made With Real Sugar",
    "sku": "160826",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Made With Real Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "162822",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 7.5oz Can (24ct)"
  },
  {
    "name": "Pepsi (Sleek Can)",
    "sku": "161655",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi (Sleek Can) - 12oz Can (12ct)"
  },
  {
    "name": "Pepsi",
    "sku": "164380",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "160140",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Mountain Dew - 7.5oz Can (30ct)"
  },
  {
    "name": "Mountain Dew (2/18 Packs)",
    "sku": "107720",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Mountain Dew (2/18 Packs) - 12oz Can (36ct)"
  },
  {
    "name": "Pepsi",
    "sku": "160137",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi - 7.5oz Can (30ct)"
  },
  {
    "name": "Diet Pepsi (36pk Cube)",
    "sku": "166190",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Diet Pepsi (36pk Cube) - 12oz Can (36ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "162820",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 7.5oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi (2/12 Packs)",
    "sku": "166055",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166069",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166134",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi (24pk Cube)",
    "sku": "166188",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166135",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi (4/6 Packs)",
    "sku": "166180",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166100",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 7.5oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi (4/6 Packs)",
    "sku": "166018",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (4/6 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Caffeine Free Diet Pepsi (2/12 Packs)",
    "sku": "166035",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Caffeine Free Diet Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi Wild Cherry (2/12 Packs)",
    "sku": "165985",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi Wild Cherry (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166340",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 12oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi (2/12 Packs)",
    "sku": "166102",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166341",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 12oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166132",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Diet Pepsi - 1l Bottle (15ct)"
  },
  {
    "name": "Diet Pepsi (36pk Cube)",
    "sku": "166185",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Diet Pepsi (36pk Cube) - 12oz Can (36ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166044",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Diet Pepsi - 1.25l Bottle (12ct)"
  },
  {
    "name": "Diet Pepsi (4/6 Packs)",
    "sku": "166171",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166070",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Caffeine Free Diet Pepsi",
    "sku": "166024",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Caffeine Free Diet Pepsi - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166105",
    "category": "Soft Drinks",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 16oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi Wild Cherry",
    "sku": "165983",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Pepsi Wild Cherry - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166131",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Diet Pepsi - 1l Bottle (15ct)"
  },
  {
    "name": "Caffeine Free Diet Pepsi",
    "sku": "165998",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Caffeine Free Diet Pepsi - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar Wild Cherry (2/12 Packs)",
    "sku": "165355",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar Wild Cherry (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar Wild Cherry",
    "sku": "165408",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pepsi Zero Sugar Wild Cherry - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166168",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 24oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper (2/18 Packs)",
    "sku": "107909",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Dr Pepper (2/18 Packs) - 12oz Can (36ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "165956",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Crush Watermelon",
    "sku": "166586",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "889392003628",
    "full_name": "Crush Watermelon - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "166209",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi - 7.5oz Can (30ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "166210",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Mountain Dew - 7.5oz Can (30ct)"
  },
  {
    "name": "Crush Watermelon",
    "sku": "166585",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Watermelon - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166211",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Diet Pepsi - 7.5oz Can (30ct)"
  },
  {
    "name": "Pepsi (2/18 Packs)",
    "sku": "107722",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Pepsi (2/18 Packs) - 12oz Can (36ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "167429",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 24oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "5358",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi - 12oz Can (30ct)"
  },
  {
    "name": "Mountain Dew Code Red",
    "sku": "142417",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Code Red - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "167427",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 24oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "167911",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "167428",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 24oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166165",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 24oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Kickstart Pineapple Orange Mango",
    "sku": "168123",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Pineapple Orange Mango - 16oz Can (12ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "32945",
    "category": "Soft Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 24oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Kickstart Black Cherry",
    "sku": "169715",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "18",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Black Cherry - 12oz Can (18ct)"
  },
  {
    "name": "Mountain Dew Kickstart Pineapple Orange Mango",
    "sku": "169718",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "18",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Pineapple Orange Mango - 12oz Can (18ct)"
  },
  {
    "name": "Mountain Dew Kickstart Orange Citrus",
    "sku": "169716",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "18",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Orange Citrus - 12oz Can (18ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "165343",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Diet Pepsi - 7.5oz Can (30ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "169575",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 7.5oz Can (30ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "120345",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 12oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Zero Sugar Ginger Ale",
    "sku": "163750",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Zero Sugar Ginger Ale - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Zero Sugar",
    "sku": "173688",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Zero Sugar",
    "sku": "173615",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Zero Sugar - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Zero Sugar",
    "sku": "172230",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper & Cream Soda",
    "sku": "173644",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper & Cream Soda - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper & Cream Soda",
    "sku": "173689",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper & Cream Soda - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper & Cream Soda",
    "sku": "173643",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper & Cream Soda - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper & Cream Soda",
    "sku": "173645",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper & Cream Soda - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Zero Sugar",
    "sku": "172179",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar Wild Cherry",
    "sku": "165849",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar Wild Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Zero Sugar (24pk Cube)",
    "sku": "173551",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Zero Sugar (24pk Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast Zero Sugar",
    "sku": "169698",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "167464",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 12oz Can (30ct)"
  },
  {
    "name": "Mountain Dew Zero Sugar",
    "sku": "192475",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Zero Sugar - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar Wild Cherry",
    "sku": "193033",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar Wild Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast Zero Sugar",
    "sku": "169697",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast Zero Sugar",
    "sku": "169696",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "169280",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 7.5oz Can (30ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "172982",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Crush Orange - 12oz Can (30ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "171481",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "197242",
    "category": "Soft Drinks",
    "pkg_size": "1.25l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 1.25l Bottle (12ct)"
  },
  {
    "name": "Mountain Dew Major Melon",
    "sku": "197723",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Major Melon - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry Zero Sugar",
    "sku": "198645",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Zero Sugar",
    "sku": "198644",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Zero Sugar",
    "sku": "198643",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry Zero Sugar",
    "sku": "198641",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Zero Sugar",
    "sku": "198640",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper & Cream Soda Zero Sugar",
    "sku": "198642",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper & Cream Soda Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Zero Sugar",
    "sku": "198649",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Dr Pepper Zero Sugar - 2l Bottle (8ct)"
  },
  {
    "name": "Dr Pepper Zero Sugar",
    "sku": "198651",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero Sugar - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Mango",
    "sku": "197954",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Mango - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "201000",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 12oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "196322",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi - 7.5oz Can (30ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "169294",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Crush Orange - 7.5oz Can (30ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "201993",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Sparkling Fruit Punch LTO",
    "sku": "202308",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Sparkling Fruit Punch LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Crush Sparkling Fruit Punch",
    "sku": "202310",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Crush Sparkling Fruit Punch - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Cranberry Raspberry Ginger Ale LTO",
    "sku": "202687",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "012000021367",
    "full_name": "Schweppes Cranberry Raspberry Ginger Ale LTO - 2l Bottle (8ct)"
  },
  {
    "name": "Schweppes Cranberry Raspberry Ginger Ale LTO",
    "sku": "202685",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "012000021381",
    "full_name": "Schweppes Cranberry Raspberry Ginger Ale LTO - 2l Bottle (8ct)"
  },
  {
    "name": "Manzanita Sol Apple (Cube)",
    "sku": "104046",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Manzanita Sol Apple (Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "205539",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Pepsi - 12oz Can (36ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "205541",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Diet Pepsi - 12oz Can (36ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "205542",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Mountain Dew - 12oz Can (36ct)"
  },
  {
    "name": "Mountain Dew Spark",
    "sku": "204605",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Spark - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar (Cube)",
    "sku": "159175",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar (Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Starry Zero Sugar",
    "sku": "209836",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Starry Zero Sugar",
    "sku": "209800",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Starry Zero Sugar",
    "sku": "320132",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Starry Zero Sugar - 7.5oz Can (30ct)"
  },
  {
    "name": "Starry Zero Sugar",
    "sku": "320268",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry Zero Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "Starry Zero Sugar",
    "sku": "209797",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Starry (Fountain)",
    "sku": "320081",
    "category": "Soft Drinks",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Starry (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Starry (Fountain)",
    "sku": "320082",
    "category": "Soft Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Starry (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Starry",
    "sku": "209812",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Starry - 7.5oz Can (30ct)"
  },
  {
    "name": "Starry (4/6 Packs)",
    "sku": "209833",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry (4/6 Packs) - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starry (2/12 Packs)",
    "sku": "209807",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Starry",
    "sku": "209835",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry - 20oz Bottle (24ct)"
  },
  {
    "name": "Starry",
    "sku": "209798",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry - 20oz Bottle (24ct)"
  },
  {
    "name": "Starry",
    "sku": "209810",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Starry - 2l Bottle (8ct)"
  },
  {
    "name": "Dr Pepper & Cream Soda",
    "sku": "192325",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper & Cream Soda - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "201227",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "36",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 12oz Can (36ct)"
  },
  {
    "name": "Dr Pepper Strawberries & Cream",
    "sku": "320285",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Strawberries & Cream - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Strawberries & Cream",
    "sku": "320267",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Strawberries & Cream - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Strawberries & Cream",
    "sku": "320271",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Strawberries & Cream - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "166208",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Dr Pepper - 7.5oz Can (30ct)"
  },
  {
    "name": "Pepsi",
    "sku": "92746",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Made With Real Sugar",
    "sku": "173510",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi Made With Real Sugar - 7.5oz Can (30ct)"
  },
  {
    "name": "Mug Root Beer",
    "sku": "320332",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Mug Root Beer - 7.5oz Can (30ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "320330",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 7.5oz Can (30ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "92748",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Diet Pepsi",
    "sku": "166258",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Pepsi - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starry",
    "sku": "321253",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starry - 16oz Can (12ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "208614",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "320768",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 7.5oz Can (30ct)"
  },
  {
    "name": "Pepsi",
    "sku": "322085",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 7.5oz Can (24ct)"
  },
  {
    "name": "Starry",
    "sku": "322092",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry - 7.5oz Can (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "322289",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale",
    "sku": "322290",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale Zero Sugar",
    "sku": "322291",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Ginger Ale Zero Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "145310",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew",
    "sku": "322086",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew - 7.5oz Can (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "322087",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "173499",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Pepsi - 7.5oz Can (30ct)"
  },
  {
    "name": "Dr Pepper",
    "sku": "322288",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper - 7.5oz Can (24ct)"
  },
  {
    "name": "Mug Root Beer Zero Sugar",
    "sku": "205397",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Mug Root Beer Zero Sugar",
    "sku": "31240",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer Zero Sugar - 20oz Bottle (24ct)"
  },
  {
    "name": "Mug Root Beer Zero Sugar",
    "sku": "4755",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Made with Real Sugar",
    "sku": "322089",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Made with Real Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "320393",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Creamy Coconut LTO",
    "sku": "323213",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Creamy Coconut LTO - 12oz Can (24ct)"
  },
  {
    "name": "Diet Pepsi Kosher",
    "sku": "165118",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Diet Pepsi Kosher - 2l Bottle (8ct)"
  },
  {
    "name": "Dr Pepper Zero Creamy Coconut LTO",
    "sku": "323214",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero Creamy Coconut LTO - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Peach",
    "sku": "323171",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Peach - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Peach",
    "sku": "323123",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Peach - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Peach",
    "sku": "323122",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Peach - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Lime",
    "sku": "170349",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Lime - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Creamy Coconut LTO",
    "sku": "323215",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Creamy Coconut LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Lime",
    "sku": "170350",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Lime - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Creamy Coconut Zero Sugar LTO",
    "sku": "323212",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Creamy Coconut Zero Sugar LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Ginger Ale Zero Sugar",
    "sku": "321392",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Schweppes Ginger Ale Zero Sugar - 7.5oz Can (30ct)"
  },
  {
    "name": "Dr Pepper Creamy Coconut LTO",
    "sku": "323558",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Creamy Coconut LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Star Spangled Splash LTO",
    "sku": "323590",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Star Spangled Splash LTO - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Star Spangled Splash LTO",
    "sku": "323588",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Star Spangled Splash LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Big Red Zero Sugar (2/12 Packs)",
    "sku": "96461",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Big Red Zero Sugar (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry",
    "sku": "322090",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry - 7.5oz Can (24ct)"
  },
  {
    "name": "Crush Sparkling Fruit Punch LTO",
    "sku": "323855",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Sparkling Fruit Punch LTO - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew VooDew Zero Sugar LTO",
    "sku": "324099",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew VooDew Zero Sugar LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew VooDew LTO",
    "sku": "324092",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew VooDew LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew VooDew LTO",
    "sku": "324093",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew VooDew LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew VooDew Zero Sugar LTO",
    "sku": "324098",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew VooDew Zero Sugar LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew VooDew Zero Sugar",
    "sku": "324097",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew VooDew Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Mug Root Beer",
    "sku": "322094",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Root Beer - 7.5oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "150391",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 1l Bottle (15ct)"
  },
  {
    "name": "Mountain Dew VooDew LTO",
    "sku": "324096",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew VooDew LTO - 12oz Can (24ct)"
  },
  {
    "name": "Starry Zero Sugar Cranberry Blizz LTO",
    "sku": "324834",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starry Zero Sugar Cranberry Blizz LTO - 12oz Can (12ct)"
  },
  {
    "name": "Starry Zero Sugar Cranberry Blizz LTO",
    "sku": "324847",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starry Zero Sugar Cranberry Blizz LTO - 12oz Can (24ct)"
  },
  {
    "name": "Starry Zero Sugar Cranberry Blizz LTO",
    "sku": "324849",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Starry Zero Sugar Cranberry Blizz LTO - 2l Bottle (8ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "324122",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Dr Pepper - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Cranberry Raspberry Ginger Ale LTO",
    "sku": "324957",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Cranberry Raspberry Ginger Ale LTO - 12oz Can (24ct)"
  },
  {
    "name": "Diet Dr Pepper",
    "sku": "320428",
    "category": "Soft Drinks",
    "pkg_size": "7.5oz Can",
    "case_qty": "30",
    "upc": "",
    "full_name": "Diet Dr Pepper - 7.5oz Can (30ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "150390",
    "category": "Soft Drinks",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 1l Bottle (15ct)"
  },
  {
    "name": "Dr Pepper Strawberries & Cream",
    "sku": "322769",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Strawberries & Cream - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Zero (Cube)",
    "sku": "209520",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero (Cube) - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "sku": "324186",
    "category": "Soft Drinks",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast - 2l Bottle (8ct)"
  },
  {
    "name": "Pepsi Zero Sugar Wild Cherry and Cream",
    "sku": "325290",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Zero Sugar Wild Cherry and Cream - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Zero Sugar Blackberry",
    "sku": "325366",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Zero Sugar Blackberry - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Blackberry",
    "sku": "325365",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Blackberry - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Blackberry",
    "sku": "325367",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Blackberry - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Blackberry",
    "sku": "325372",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Blackberry - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry and Cream LTO",
    "sku": "325519",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry and Cream LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Wild Cherry and Cream",
    "sku": "325521",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry and Cream - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Zero Sugar",
    "sku": "136944",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi Zero Sugar - 16oz Can (12ct)"
  },
  {
    "name": "Pepsi Wild Cherry Zero Sugar",
    "sku": "325576",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Wild Cherry Zero Sugar - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pepsi",
    "sku": "34707",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus LTO",
    "sku": "325813",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus LTO",
    "sku": "325812",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus LTO",
    "sku": "325810",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus LTO - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus Zero Sugar LTO",
    "sku": "325815",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus Zero Sugar LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Kickstart Fruit Punch",
    "sku": "137569",
    "category": "Soft Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew Kickstart Fruit Punch - 16oz Can (12ct)"
  },
  {
    "name": "Dr Pepper Creamy Coconut Zero Sugar LTO",
    "sku": "323559",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Creamy Coconut Zero Sugar LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Summer Freeze Zero Sugar LTO",
    "sku": "320772",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Summer Freeze Zero Sugar LTO - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Summer Freeze LTO",
    "sku": "320637",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Summer Freeze LTO - 12oz Can (24ct)"
  },
  {
    "name": "Crush Orange",
    "sku": "321457",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Crush Orange - 12oz Bottle (24ct)"
  },
  {
    "name": "poppi Doc Pop",
    "sku": "328081",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Doc Pop - 12oz Can (12ct)"
  },
  {
    "name": "poppi Classic Cola",
    "sku": "328087",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Classic Cola - 12oz Can (12ct)"
  },
  {
    "name": "poppi Grape",
    "sku": "328088",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Grape - 12oz Can (12ct)"
  },
  {
    "name": "poppi Doc Pop",
    "sku": "328095",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "poppi Doc Pop - 12oz Can (24ct)"
  },
  {
    "name": "poppi Lemon Lime",
    "sku": "328101",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Lemon Lime - 12oz Can (12ct)"
  },
  {
    "name": "poppi Root Beer",
    "sku": "328104",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Root Beer - 12oz Can (12ct)"
  },
  {
    "name": "poppi Orange Cream",
    "sku": "328105",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Orange Cream - 12oz Can (12ct)"
  },
  {
    "name": "poppi Wild Berry",
    "sku": "328112",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Wild Berry - 12oz Can (12ct)"
  },
  {
    "name": "poppi Alpine Blast",
    "sku": "328129",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Alpine Blast - 12oz Can (12ct)"
  },
  {
    "name": "poppi Watermelon",
    "sku": "328138",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Watermelon - 12oz Can (12ct)"
  },
  {
    "name": "poppi orange",
    "sku": "328137",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi orange - 12oz Can (12ct)"
  },
  {
    "name": "poppi Cream Soda",
    "sku": "328142",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Cream Soda - 12oz Can (12ct)"
  },
  {
    "name": "poppi Ginger Lime",
    "sku": "328141",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Ginger Lime - 12oz Can (12ct)"
  },
  {
    "name": "poppi Strawberry Lemon",
    "sku": "328143",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Strawberry Lemon - 12oz Can (12ct)"
  },
  {
    "name": "poppi Raspberry Rose",
    "sku": "328145",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Raspberry Rose - 12oz Can (12ct)"
  },
  {
    "name": "poppi Cherry Limeade",
    "sku": "328084",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Cherry Limeade - 12oz Can (12ct)"
  },
  {
    "name": "poppi Cherry Cola",
    "sku": "328108",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Cherry Cola - 12oz Can (12ct)"
  },
  {
    "name": "poppi Ginger Fizz LTO",
    "sku": "328136",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Ginger Fizz LTO - 12oz Can (12ct)"
  },
  {
    "name": "Pepsi Prebiotic Cola LTO",
    "sku": "331264",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Prebiotic Cola LTO - 12oz Can (24ct)"
  },
  {
    "name": "Pepsi Prebiotic Cola Cherry Vanilla LTO",
    "sku": "331281",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Prebiotic Cola Cherry Vanilla LTO - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus Zero Sugar LTO",
    "sku": "331226",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus Zero Sugar LTO - 12oz Can (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus Zero Sugar LTO",
    "sku": "331230",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus Zero Sugar LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Cabo Citrus Zero LTO",
    "sku": "331231",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Cabo Citrus Zero LTO - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "330901",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Cherry Zero Sugar",
    "sku": "330897",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry Zero Sugar - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "330896",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 12oz Can (24ct)"
  },
  {
    "name": "Dr Pepper Cherry",
    "sku": "330914",
    "category": "Soft Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Cherry - 20oz Bottle (24ct)"
  },
  {
    "name": "poppi Shirley Temple",
    "sku": "339017",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "poppi Shirley Temple - 12oz Can (12ct)"
  },
  {
    "name": "Pepsi Real Sugar",
    "sku": "325400",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Real Sugar - 12oz Bottle (24ct)"
  },
  {
    "name": "Pepsi Real Sugar",
    "sku": "325390",
    "category": "Soft Drinks",
    "pkg_size": "12oz Long Neck",
    "case_qty": "24",
    "upc": "",
    "full_name": "Pepsi Real Sugar - 12oz Long Neck (24ct)"
  },
  {
    "name": "Mug Cream Soda Real Sugar",
    "sku": "328019",
    "category": "Soft Drinks",
    "pkg_size": "12oz Long Neck",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Cream Soda Real Sugar - 12oz Long Neck (24ct)"
  },
  {
    "name": "Mug Cream Soda Real Sugar",
    "sku": "328020",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mug Cream Soda Real Sugar - 12oz Bottle (24ct)"
  },
  {
    "name": "Mountain Dew Baja Blast Real Sugar",
    "sku": "328022",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Mountain Dew Baja Blast Real Sugar - 12oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Real Sugar",
    "sku": "331067",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Real Sugar - 12oz Bottle (24ct)"
  },
  {
    "name": "Dr Pepper Real Sugar",
    "sku": "331068",
    "category": "Soft Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dr Pepper Real Sugar - 12oz Bottle (24ct)"
  },
  {
    "name": "Manzanita Sol Apple Real Sugar",
    "sku": "331164",
    "category": "Soft Drinks",
    "pkg_size": "12oz Long Neck",
    "case_qty": "24",
    "upc": "",
    "full_name": "Manzanita Sol Apple Real Sugar - 12oz Long Neck (24ct)"
  },
  {
    "name": "Manzanita Sol Apple Real Sugar",
    "sku": "331165",
    "category": "Soft Drinks",
    "pkg_size": "12oz Long Neck",
    "case_qty": "24",
    "upc": "",
    "full_name": "Manzanita Sol Apple Real Sugar - 12oz Long Neck (24ct)"
  },
  {
    "name": "Pepsi Prebiotic Cola",
    "sku": "331277",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi Prebiotic Cola - 12oz Can (12ct)"
  },
  {
    "name": "Pepsi Prebiotic Cola Cherry Vanilla",
    "sku": "331283",
    "category": "Soft Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pepsi Prebiotic Cola Cherry Vanilla - 12oz Can (12ct)"
  },
  {
    "name": "Diet Mountain Dew",
    "sku": "82035",
    "category": "Soft Drinks",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Diet Mountain Dew - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Cool Attitudes Alert",
    "sku": "95459",
    "category": "Energy Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Cool Attitudes Alert - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Rockstar Energy Original",
    "sku": "120721",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Rockstar Energy Original - 16oz Can (24ct)"
  },
  {
    "name": "Rockstar Energy Original",
    "sku": "120742",
    "category": "Energy Drinks",
    "pkg_size": "24oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy Original - 24oz Can (12ct)"
  },
  {
    "name": "Mountain Dew AMP Original",
    "sku": "150000",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Mountain Dew AMP Original - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Sugar Free",
    "sku": "120743",
    "category": "Energy Drinks",
    "pkg_size": "24oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy Sugar Free - 24oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Sugar Free",
    "sku": "197257",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy Sugar Free - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Fruit Punch",
    "sku": "197259",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Fruit Punch - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Original",
    "sku": "197779",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy Original - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Pure Zero Silver Ice",
    "sku": "197261",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Pure Zero Silver Ice - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Xdurance Kiwi Strawberry",
    "sku": "198598",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Xdurance Kiwi Strawberry - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Hardcore Apple",
    "sku": "198615",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Hardcore Apple - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Lime Freeze",
    "sku": "198655",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Lime Freeze - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Pure Zero Tangerine Mango Guava Strawberry",
    "sku": "198661",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Pure Zero Tangerine Mango Guava Strawberry - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Recovery Lemonade",
    "sku": "125576",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Recovery Lemonade - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Recovery Orangeade",
    "sku": "198579",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Recovery Orangeade - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Boom Whipped Strawberry",
    "sku": "198593",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy Boom Whipped Strawberry - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Pure Zero Fruit Punch",
    "sku": "198657",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Pure Zero Fruit Punch - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Sugar Free",
    "sku": "137858",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "20",
    "upc": "",
    "full_name": "Rockstar Energy Sugar Free - 16oz Can (20ct)"
  },
  {
    "name": "Gatorade Gatorlyte Orange",
    "sku": "199215",
    "category": "Energy Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Orange - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Gatorlyte Cherry Lime",
    "sku": "199373",
    "category": "Energy Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Cherry Lime - 20oz Bottle (12ct)"
  },
  {
    "name": "Rockstar Pure Zero Lim\u00f3n Pepino",
    "sku": "198799",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Pure Zero Lim\u00f3n Pepino - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Pure Zero Silver Ice",
    "sku": "200763",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Rockstar Pure Zero Silver Ice - 16oz Can (24ct)"
  },
  {
    "name": "Rockstar Recovery Orangeade (6/4 Packs)",
    "sku": "200764",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Rockstar Recovery Orangeade (6/4 Packs) - 16oz Can (24ct)"
  },
  {
    "name": "Rockstar Energy OG Flavor",
    "sku": "202555",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy OG Flavor - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Watermelon",
    "sku": "206638",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Watermelon - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Original",
    "sku": "137857",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "20",
    "upc": "",
    "full_name": "Rockstar Energy Original - 16oz Can (20ct)"
  },
  {
    "name": "CELSIUS Sparkling Fuji Apple Pear",
    "sku": "320126",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Fuji Apple Pear - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Orange",
    "sku": "320146",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Orange - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Wild Berry",
    "sku": "320147",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Wild Berry - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Watermelon",
    "sku": "320148",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Watermelon - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Grape Rush",
    "sku": "320165",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Grape Rush - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Kiwi Guava",
    "sku": "320166",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Kiwi Guava - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Peach Vibe",
    "sku": "320167",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "889392021417",
    "full_name": "CELSIUS Sparkling Peach Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Tropical Vibe",
    "sku": "320168",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "889392000597",
    "full_name": "CELSIUS Sparkling Tropical Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Mango Passionfruit",
    "sku": "320169",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Mango Passionfruit - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Arctic Vibe",
    "sku": "320170",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "889392021394",
    "full_name": "CELSIUS Sparkling Arctic Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Raspberry Acai Green Tea",
    "sku": "320180",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Raspberry Acai Green Tea - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Peach Mango Green Tea",
    "sku": "320181",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Peach Mango Green Tea - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Orange (6/4 Packs)",
    "sku": "320096",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "CELSIUS Sparkling Orange (6/4 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Peach Vibe (6/4 Packs)",
    "sku": "320103",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "CELSIUS Sparkling Peach Vibe (6/4 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Wild Berry",
    "sku": "320099",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "CELSIUS Sparkling Wild Berry - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Fuji Apple Pear",
    "sku": "320129",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "CELSIUS Sparkling Fuji Apple Pear - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Tropical Vibe (6/4 Packs)",
    "sku": "320158",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "048500017821",
    "full_name": "CELSIUS Sparkling Tropical Vibe (6/4 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Kiwi Guava",
    "sku": "320130",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "CELSIUS Sparkling Kiwi Guava - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Lemon Lime",
    "sku": "320244",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Lemon Lime - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Fantasy Vibe",
    "sku": "320228",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Fantasy Vibe - 12oz Can (12ct)"
  },
  {
    "name": "Rockstar Recovery Strawberry Lemonade",
    "sku": "320019",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Recovery Strawberry Lemonade - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Strawberry Peach",
    "sku": "209351",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Strawberry Peach - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Variety Pack",
    "sku": "320195",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "CELSIUS Variety Pack - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Sparkling Oasis Vibe",
    "sku": "321291",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Oasis Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Green Apple Cherry",
    "sku": "320362",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Green Apple Cherry - 12oz Can (12ct)"
  },
  {
    "name": "Celsius Variety Pack",
    "sku": "320258",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Celsius Variety Pack - 12oz Can (24ct)"
  },
  {
    "name": "CELSIUS Essentials Blue Crush",
    "sku": "322535",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Essentials Blue Crush - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Essentials Dragonberry",
    "sku": "322536",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Essentials Dragonberry - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Essentials Orangesicle",
    "sku": "322534",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Essentials Orangesicle - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Essentials Cherry Limeade",
    "sku": "322530",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Essentials Cherry Limeade - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Cosmic Vibe",
    "sku": "321822",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Cosmic Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Raspberry Peach",
    "sku": "322416",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Raspberry Peach - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Fizz-Free Blue Razz Lemonade",
    "sku": "322415",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Fizz-Free Blue Razz Lemonade - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Astro Vibe",
    "sku": "322418",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Astro Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Galaxy Vibe",
    "sku": "322419",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Galaxy Vibe - 12oz Can (12ct)"
  },
  {
    "name": "Rockstar Recovery Strawberry Lemonade",
    "sku": "322432",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Recovery Strawberry Lemonade - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Focus Orange Pineapple",
    "sku": "322458",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Focus Orange Pineapple - 12oz Can (12ct)"
  },
  {
    "name": "Rockstar Recovery Berryade",
    "sku": "322437",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Recovery Berryade - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Focus Lemon Lime",
    "sku": "322467",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Focus Lemon Lime - 12oz Can (12ct)"
  },
  {
    "name": "Rockstar Focus White Peach",
    "sku": "322470",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Focus White Peach - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Watermelon Lemonade",
    "sku": "323604",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Watermelon Lemonade - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Kiwi Strawberry",
    "sku": "323606",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Kiwi Strawberry - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Cherry Cola",
    "sku": "324095",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Cherry Cola - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Retro Vibe",
    "sku": "325360",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Retro Vibe - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Strawberry Passionfruit",
    "sku": "325351",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Strawberry Passionfruit - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Mango Lemonade",
    "sku": "325361",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Mango Lemonade - 12oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Pineapple",
    "sku": "325406",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Pineapple - 16oz Can (12ct)"
  },
  {
    "name": "Rockstar Energy Boom Pina Colada",
    "sku": "325408",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Energy Boom Pina Colada - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Sparkling Playa Vibe",
    "sku": "325352",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Sparkling Playa Vibe - 12oz Can (12ct)"
  },
  {
    "name": "Starbucks Iced Energy Tropical Peach",
    "sku": "325854",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "048500017753",
    "full_name": "Starbucks Iced Energy Tropical Peach - 12oz Can (12ct)"
  },
  {
    "name": "Starbucks Iced Energy Watermelon Twist",
    "sku": "325856",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Iced Energy Watermelon Twist - 12oz Can (12ct)"
  },
  {
    "name": "Starbucks Iced Energy Blueberry Lemonade",
    "sku": "325858",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Iced Energy Blueberry Lemonade - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Essentials Grape Slush",
    "sku": "325363",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Essentials Grape Slush - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Essentials Watermelon Ice",
    "sku": "325358",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Essentials Watermelon Ice - 16oz Can (12ct)"
  },
  {
    "name": "CELSIUS Dragon Fruit Lime",
    "sku": "326944",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Dragon Fruit Lime - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Pink Lemonade",
    "sku": "326947",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Pink Lemonade - 12oz Can (12ct)"
  },
  {
    "name": "CELSIUS Spritz Vibe LTO",
    "sku": "327810",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "CELSIUS Spritz Vibe LTO - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Dream Float",
    "sku": "333506",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Dream Float - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Watermelon Wave",
    "sku": "333490",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Watermelon Wave - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Hawaiian Shaved Ice",
    "sku": "333509",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Hawaiian Shaved Ice - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Juicy Peach",
    "sku": "333510",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Juicy Peach - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Orange Kiss",
    "sku": "333517",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Orange Kiss - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Pink Slush",
    "sku": "333518",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Pink Slush - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Breezeberry",
    "sku": "333531",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Breezeberry - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Cotton Candy",
    "sku": "333532",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Cotton Candy - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Cherry Twist",
    "sku": "333533",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Cherry Twist - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Cherry Slush",
    "sku": "333534",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Cherry Slush - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Cosmic Stardust",
    "sku": "333535",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Cosmic Stardust - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Blue Slush",
    "sku": "333536",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Blue Slush - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Sherbet Swirl",
    "sku": "334626",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Sherbet Swirl - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Strawberry Sunrise",
    "sku": "334628",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Strawberry Sunrise - 12oz Can (12ct)"
  },
  {
    "name": "Starbucks Iced Energy Strawberry Kiwi",
    "sku": "328074",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Iced Energy Strawberry Kiwi - 12oz Can (12ct)"
  },
  {
    "name": "Rockstar Punched Blackberry",
    "sku": "330850",
    "category": "Energy Drinks",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Rockstar Punched Blackberry - 16oz Can (12ct)"
  },
  {
    "name": "Alani Nu Cherry Bomb LTO",
    "sku": "333519",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Cherry Bomb LTO - 12oz Can (12ct)"
  },
  {
    "name": "Alani Nu Lime Slush LTO",
    "sku": "333511",
    "category": "Energy Drinks",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Alani Nu Lime Slush LTO - 12oz Can (12ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "85520",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "85522",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "85526",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Fierce Grape",
    "sku": "85532",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fierce Grape - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "85524",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Orange (Fountain)",
    "sku": "89963",
    "category": "Sports Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Gatorade Orange (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Gatorade Cool Blue",
    "sku": "92443",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Cool Blue - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Cool Blue",
    "sku": "94182",
    "category": "Sports Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Cool Blue - 24oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "94200",
    "category": "Sports Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 24oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "94191",
    "category": "Sports Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 24oz Bottle (24ct)"
  },
  {
    "name": "Muscle Milk Genuine Chocolate",
    "sku": "109763",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Genuine Chocolate - 14oz Bottle (12ct)"
  },
  {
    "name": "Muscle Milk Genuine Vanilla Cr\u00e8me",
    "sku": "109764",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Genuine Vanilla Cr\u00e8me - 14oz Bottle (12ct)"
  },
  {
    "name": "Muscle Milk Genuine Strawberries 'N Cr\u00e8me",
    "sku": "109768",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Genuine Strawberries 'N Cr\u00e8me - 14oz Bottle (12ct)"
  },
  {
    "name": "Gatorade G2 Fruit Punch",
    "sku": "127766",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade G2 Fruit Punch - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "130369",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "130370",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "133928",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "133929",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Orange - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Fierce Grape",
    "sku": "133931",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Fierce Grape - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "133930",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade G2 Fruit Punch",
    "sku": "133945",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade G2 Fruit Punch - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "133932",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Cool Blue",
    "sku": "133934",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Cool Blue - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Fierce Strawberry",
    "sku": "133958",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Fierce Strawberry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade G2 Glacier Freeze",
    "sku": "135318",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade G2 Glacier Freeze - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Cool Blue",
    "sku": "135942",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Cool Blue - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Glacier Cherry",
    "sku": "137415",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Glacier Cherry - 28oz Bottle (15ct)"
  },
  {
    "name": "Muscle Milk Pro Advanced Nutrition Knockout Chocolate",
    "sku": "140533",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Pro Advanced Nutrition Knockout Chocolate - 14oz Bottle (12ct)"
  },
  {
    "name": "Muscle Milk Pro Advanced Nutrition Intense Vanilla",
    "sku": "140534",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Pro Advanced Nutrition Intense Vanilla - 14oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Fierce Green Apple",
    "sku": "141440",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Fierce Green Apple - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Fierce Blue Cherry",
    "sku": "141809",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Fierce Blue Cherry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Glacier Cherry",
    "sku": "142666",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Cherry - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Glacier Cherry",
    "sku": "148332",
    "category": "Sports Drinks",
    "pkg_size": "24oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Cherry - 24oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Arctic Blitz",
    "sku": "153752",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Arctic Blitz - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Icy Charge",
    "sku": "153754",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Icy Charge - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Fruit Punch (Fountain)",
    "sku": "87252",
    "category": "Sports Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Gatorade Fruit Punch (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Gatorade Lemon Lime (Fountain)",
    "sku": "89964",
    "category": "Sports Drinks",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Gatorade Lemon Lime (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Gatorade Powders Variety Pack",
    "sku": "90704",
    "category": "Sports Drinks",
    "pkg_size": "21oz Bag",
    "case_qty": "32",
    "upc": "",
    "full_name": "Gatorade Powders Variety Pack - 21oz Bag (32ct)"
  },
  {
    "name": "Gatorade G2 Fruit Punch",
    "sku": "104850",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade G2 Fruit Punch - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "127762",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "127763",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "130368",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Berry",
    "sku": "130385",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Berry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "130816",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Berry",
    "sku": "130817",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Berry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lime Cucumber",
    "sku": "133926",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lime Cucumber - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Tropical Mango",
    "sku": "133950",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "048500017791",
    "full_name": "Gatorade Tropical Mango - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Lime Cucumber",
    "sku": "135292",
    "category": "Sports Drinks",
    "pkg_size": "32oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Lime Cucumber - 32oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "135798",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "135788",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "135800",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "135863",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "135801",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Glacier Cherry",
    "sku": "144095",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Cherry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lime Cucumber",
    "sku": "151859",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lime Cucumber - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry",
    "sku": "166746",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Lemon Lime",
    "sku": "166740",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Lemon Lime - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Orange",
    "sku": "166736",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Orange - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry",
    "sku": "169373",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "130566",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Lemon Lime (3/8 Packs)",
    "sku": "130563",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Orange (3/8 Packs)",
    "sku": "130565",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Fruit Punch (3/8 Packs)",
    "sku": "130564",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze",
    "sku": "169374",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Berry",
    "sku": "168449",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Berry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze",
    "sku": "168657",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Fruit Punch",
    "sku": "166734",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Fruit Punch - 28oz Bottle (15ct)"
  },
  {
    "name": "Muscle Milk Pro Advanced Nutrition Slammin Strawberry",
    "sku": "173502",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Pro Advanced Nutrition Slammin Strawberry - 14oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Zero Grape",
    "sku": "168696",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Grape - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Super Shake Chocolate",
    "sku": "172537",
    "category": "Sports Drinks",
    "pkg_size": "11.16oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Super Shake Chocolate - 11.16oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "166176",
    "category": "Sports Drinks",
    "pkg_size": "1gal Jug",
    "case_qty": "4",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 1gal Jug (4ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "166174",
    "category": "Sports Drinks",
    "pkg_size": "1gal Jug",
    "case_qty": "4",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 1gal Jug (4ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "127764",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Cool Blue (3/8 Packs)",
    "sku": "130572",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Cool Blue (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze (3/8 Packs)",
    "sku": "168776",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Variety Pack",
    "sku": "193614",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Gatorade Zero Variety Pack - 12oz Bottle (18ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "173497",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Fierce Grape",
    "sku": "130573",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fierce Grape - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Cool Blue",
    "sku": "196446",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Cool Blue - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry",
    "sku": "197784",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Gatorlyte Strawberry Kiwi",
    "sku": "199214",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Strawberry Kiwi - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Zero Orange",
    "sku": "168490",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Orange - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Grape",
    "sku": "171614",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Grape - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Lemon Lime",
    "sku": "168489",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Lemon Lime - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Lime Cucumber",
    "sku": "197590",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lime Cucumber - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "135638",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Berry",
    "sku": "168954",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Berry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Cool Blue",
    "sku": "135649",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Cool Blue - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze",
    "sku": "168958",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Fruit Punch",
    "sku": "171619",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Fruit Punch - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lime Cucumber",
    "sku": "197610",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lime Cucumber - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Fruit Punch (3/8 Packs)",
    "sku": "171615",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Fruit Punch (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Glacier Cherry",
    "sku": "173492",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Cherry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Grape",
    "sku": "171618",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Grape - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Glacier Cherry",
    "sku": "144094",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Glacier Cherry - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry (3/8 Packs)",
    "sku": "168491",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry (3/8 Packs) - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry (4/6 Packs)",
    "sku": "168960",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry (4/6 Packs) - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Cool Blue (4/6 Packs)",
    "sku": "173490",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Cool Blue (4/6 Packs) - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Orange",
    "sku": "168878",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Orange - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Gatorlyte Watermelon",
    "sku": "205151",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Watermelon - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Gatorlyte Mixed Berry",
    "sku": "205398",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Mixed Berry - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Zero Lime Cucumber",
    "sku": "203378",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Lime Cucumber - 28oz Bottle (15ct)"
  },
  {
    "name": "Muscle Milk Pro Advanced Nutrition Chocolate Peanut Butter",
    "sku": "205145",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Pro Advanced Nutrition Chocolate Peanut Butter - 14oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze",
    "sku": "168957",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Orange",
    "sku": "168955",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Orange - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Cool Blue",
    "sku": "196433",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Cool Blue - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Strawberry Kiwi",
    "sku": "196432",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Strawberry Kiwi - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Gatorlyte Lemon Lime Zero",
    "sku": "209225",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Lemon Lime Zero - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Gatorlyte Lime Cucumber",
    "sku": "209286",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Lime Cucumber - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Gatorlyte Strawberry Kiwi Zero",
    "sku": "209226",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Strawberry Kiwi Zero - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade FIT Blackberry Raspberry",
    "sku": "209503",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade FIT Blackberry Raspberry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry",
    "sku": "168877",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Cool Blue",
    "sku": "196428",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Cool Blue - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Fierce Blue Cherry",
    "sku": "142762",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fierce Blue Cherry - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Frost Riptide Rush",
    "sku": "135865",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Frost Riptide Rush - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade All Stars Berry",
    "sku": "136718",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Gatorade All Stars Berry - 12oz Bottle (18ct)"
  },
  {
    "name": "Gatorade Zero Strawberry Kiwi",
    "sku": "170539",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Strawberry Kiwi - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Variety Pack",
    "sku": "134803",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Gatorade Variety Pack - 12oz Bottle (18ct)"
  },
  {
    "name": "Gatorade Frost Arctic Blitz",
    "sku": "157095",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Frost Arctic Blitz - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Variety Pack",
    "sku": "173509",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Gatorade Zero Variety Pack - 12oz Bottle (18ct)"
  },
  {
    "name": "Gatorade Zero Lime Cucumber",
    "sku": "203379",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Lime Cucumber - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Glacier Freeze",
    "sku": "85527",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "1",
    "upc": "",
    "full_name": "Gatorade Glacier Freeze - 20oz Wide Mouth (1ct)"
  },
  {
    "name": "Gatorade Zero Lemon Lime",
    "sku": "168879",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Lemon Lime - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lime Cucumber",
    "sku": "197611",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lime Cucumber - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Gatorlyte Glacier Freeze",
    "sku": "321975",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Glacier Freeze - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Zero Watermelon Splash",
    "sku": "321986",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Watermelon Splash - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Apple Burst",
    "sku": "321987",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Apple Burst - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Watermelon Splash",
    "sku": "321988",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Watermelon Splash - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Zero Apple Burst",
    "sku": "321991",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Apple Burst - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Gatorlyte Fruit Punch Zero",
    "sku": "322075",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Fruit Punch Zero - 20oz Bottle (12ct)"
  },
  {
    "name": "Muscle Milk Plant Protein Chocolate",
    "sku": "322152",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Plant Protein Chocolate - 14oz Bottle (12ct)"
  },
  {
    "name": "Muscle Milk Plant Protein Caramel Vanilla",
    "sku": "322153",
    "category": "Sports Drinks",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Muscle Milk Plant Protein Caramel Vanilla - 14oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Lightning Blast",
    "sku": "323176",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lightning Blast - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Midnight Ice",
    "sku": "323177",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Midnight Ice - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "325641",
    "category": "Sports Drinks",
    "pkg_size": "11.6oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 11.6oz Can (24ct)"
  },
  {
    "name": "Gatorade Fruit Punch",
    "sku": "325639",
    "category": "Sports Drinks",
    "pkg_size": "11.6oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Fruit Punch - 11.6oz Can (24ct)"
  },
  {
    "name": "Gatorade Lemon Lime",
    "sku": "325640",
    "category": "Sports Drinks",
    "pkg_size": "11.6oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lemon Lime - 11.6oz Can (24ct)"
  },
  {
    "name": "Gatorade Variety Pack",
    "sku": "324866",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Variety Pack - 20oz Wide Mouth (12ct)"
  },
  {
    "name": "Gatorade Zero Fruit Punch",
    "sku": "326022",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Fruit Punch - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Cool Blue",
    "sku": "326030",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Zero Cool Blue - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Zero Lemon Lime",
    "sku": "326029",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Lemon Lime - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Cherry",
    "sku": "325992",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Cherry - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Gatorlyte Pineapple Mango",
    "sku": "325412",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Gatorlyte Pineapple Mango - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Mashups Lemon Lime Orange",
    "sku": "325403",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Mashups Lemon Lime Orange - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Mashups Cool Blue Fruit Punch",
    "sku": "325401",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Mashups Cool Blue Fruit Punch - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Mashups Glacier Freeze Glacier Cherry",
    "sku": "325846",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Mashups Glacier Freeze Glacier Cherry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Gatorlyte Tropical Coconut",
    "sku": "327718",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "048500021545",
    "full_name": "Gatorade Gatorlyte Tropical Coconut - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze",
    "sku": "331019",
    "category": "Sports Drinks",
    "pkg_size": "24oz Cap",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze - 24oz Cap (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "331021",
    "category": "Sports Drinks",
    "pkg_size": "24oz Cap",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 24oz Cap (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Rain Berry",
    "sku": "330999",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Rain Berry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Lower Sugar Lemonade",
    "sku": "331000",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Lemonade - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Lower Sugar Glacier Cherry",
    "sku": "331001",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Glacier Cherry - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Lower Sugar Lemonade",
    "sku": "331002",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Lemonade - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Fruit Punch",
    "sku": "331003",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Fruit Punch - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Rain Berry",
    "sku": "331004",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Rain Berry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Fruit Punch",
    "sku": "331005",
    "category": "Sports Drinks",
    "pkg_size": "28oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Fruit Punch - 28oz Bottle (15ct)"
  },
  {
    "name": "Gatorade Lower Sugar Glacier Cherry",
    "sku": "331017",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Glacier Cherry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Lemonade",
    "sku": "331028",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Lemonade - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Rain Berry",
    "sku": "331032",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Rain Berry - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Fruit Punch",
    "sku": "331027",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Fruit Punch - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Fruit Punch",
    "sku": "331051",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Fruit Punch - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Lemonade",
    "sku": "331050",
    "category": "Sports Drinks",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Lemonade - 12oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Lower Sugar Rain Berry",
    "sku": "331052",
    "category": "Sports Drinks",
    "pkg_size": "20oz Wide Mouth",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Lower Sugar Rain Berry - 20oz Wide Mouth (24ct)"
  },
  {
    "name": "Gatorade Orange",
    "sku": "331120",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Orange - 20oz Bottle (24ct)"
  },
  {
    "name": "Gatorade Zero Glacier Freeze",
    "sku": "331170",
    "category": "Sports Drinks",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Gatorade Zero Glacier Freeze - 20oz Bottle (24ct)"
  },
  {
    "name": "Juice Tyme Sour (Fountain)",
    "sku": "56701",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Juice Tyme Sour (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Ocean Spray Cranberry",
    "sku": "70191",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Ocean Spray Cranberry - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Ocean Spray Cran Grape",
    "sku": "70193",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Ocean Spray Cran Grape - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Lemonade (Fountain)",
    "sku": "93826",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "012000191558",
    "full_name": "Tropicana Lemonade (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Tropicana Fruit Punch (Fountain)",
    "sku": "93950",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Tropicana Fruit Punch (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Lemonade",
    "sku": "123243",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemonade - 1l Bottle (15ct)"
  },
  {
    "name": "Dole Apple 100% Juice",
    "sku": "123365",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dole Apple 100% Juice - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Dole Orange Juice",
    "sku": "123367",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dole Orange Juice - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Brisk Fruit Punch",
    "sku": "125429",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Fruit Punch - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Pink Lemonade",
    "sku": "127370",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Pink Lemonade - 1l Bottle (15ct)"
  },
  {
    "name": "Dole Golden Pineapple 30% Juice",
    "sku": "134311",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dole Golden Pineapple 30% Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Dole Cranberry 15% Juice",
    "sku": "134322",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dole Cranberry 15% Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Dole Orange 100% Juice",
    "sku": "134317",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dole Orange 100% Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Dole Apple 100% Juice",
    "sku": "134323",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dole Apple 100% Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Lemonade (Fountain)",
    "sku": "143413",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemonade (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Hawaiian Punch Fruit Juicy Red",
    "sku": "6906",
    "category": "Juices & Lemonade",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Hawaiian Punch Fruit Juicy Red - 2l Bottle (8ct)"
  },
  {
    "name": "Hawaiian Punch Fruit Juicy Red",
    "sku": "19684",
    "category": "Juices & Lemonade",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Hawaiian Punch Fruit Juicy Red - 20oz Bottle (24ct)"
  },
  {
    "name": "Citrus Springs Bloody Mary Flavor Shot",
    "sku": "61820",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Citrus Springs Bloody Mary Flavor Shot - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Hawaiian Punch Fruit Juicey Red (2/12 Packs)",
    "sku": "84954",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Hawaiian Punch Fruit Juicey Red (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Tropicana Orange Juice",
    "sku": "90402",
    "category": "Juices & Lemonade",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Tropicana Orange Juice - 10oz Bottle (24ct)"
  },
  {
    "name": "Tropicana Apple",
    "sku": "90403",
    "category": "Juices & Lemonade",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Tropicana Apple - 10oz Bottle (24ct)"
  },
  {
    "name": "Tropicana Orange Juice",
    "sku": "92728",
    "category": "Juices & Lemonade",
    "pkg_size": "32oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Orange Juice - 32oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Ruby Red Grapefruit",
    "sku": "92729",
    "category": "Juices & Lemonade",
    "pkg_size": "32oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Ruby Red Grapefruit - 32oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Apple",
    "sku": "92730",
    "category": "Juices & Lemonade",
    "pkg_size": "32oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Apple - 32oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Light Lemonade (Fountain)",
    "sku": "93820",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Tropicana Light Lemonade (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Tropicana Pink Lemonade (Fountain)",
    "sku": "93822",
    "category": "Juices & Lemonade",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Tropicana Pink Lemonade (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Tropicana Cranberry Cocktail",
    "sku": "92731",
    "category": "Juices & Lemonade",
    "pkg_size": "32oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Cranberry Cocktail - 32oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Lemonade (Fountain)",
    "sku": "93825",
    "category": "Juices & Lemonade",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Tropicana Lemonade (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Tropicana Pink Lemonade (Fountain)",
    "sku": "93823",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Tropicana Pink Lemonade (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Tropicana Fruit Punch (Fountain)",
    "sku": "93951",
    "category": "Juices & Lemonade",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Tropicana Fruit Punch (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Lemonade",
    "sku": "123244",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemonade - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Lemonade",
    "sku": "125430",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Lemonade - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Fruit Punch",
    "sku": "125566",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Fruit Punch - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Lemonade",
    "sku": "125569",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Lemonade - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Fruit Punch",
    "sku": "125567",
    "category": "Juices & Lemonade",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Fruit Punch - 20oz Bottle (24ct)"
  },
  {
    "name": "Brisk Pink Lemonade",
    "sku": "127207",
    "category": "Juices & Lemonade",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Pink Lemonade - 1l Bottle (15ct)"
  },
  {
    "name": "Naked Strawberry Banana Machine",
    "sku": "129372",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Strawberry Banana Machine - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Naked Blue Machine",
    "sku": "129379",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Blue Machine - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Naked Green Machine",
    "sku": "129395",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Green Machine - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Tropicana Pure Premium Home Style Orange Juice",
    "sku": "129446",
    "category": "Juices & Lemonade",
    "pkg_size": "89oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Home Style Orange Juice - 89oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Home Style Orange Juice",
    "sku": "131361",
    "category": "Juices & Lemonade",
    "pkg_size": "14oz Carton",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pure Premium Home Style Orange Juice - 14oz Carton (12ct)"
  },
  {
    "name": "Dole Apple 100% Juice - 1G BIB (3PK)",
    "sku": "134315",
    "category": "Juices & Lemonade",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "3",
    "upc": "",
    "full_name": "Dole Apple 100% Juice - 1G BIB (3PK) - 1gal Bag In Box (3ct)"
  },
  {
    "name": "Dole Cranberry 15% Juice - 1G BIB (3PK)",
    "sku": "134318",
    "category": "Juices & Lemonade",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "3",
    "upc": "",
    "full_name": "Dole Cranberry 15% Juice - 1G BIB (3PK) - 1gal Bag In Box (3ct)"
  },
  {
    "name": "Dole Orange 100% Juice - 1G BIB (3PK)",
    "sku": "134319",
    "category": "Juices & Lemonade",
    "pkg_size": "1gal Bag In Box",
    "case_qty": "3",
    "upc": "",
    "full_name": "Dole Orange 100% Juice - 1G BIB (3PK) - 1gal Bag In Box (3ct)"
  },
  {
    "name": "Dole Grape 100% Juice",
    "sku": "148904",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dole Grape 100% Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Royal Hawaiian Cranberry Juice",
    "sku": "161194",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Royal Hawaiian Cranberry Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Royal Hawaiian Pineapple Juice",
    "sku": "161193",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Royal Hawaiian Pineapple Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "KeVita Sparkling Probiotic Lemon Ginger",
    "sku": "167574",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Sparkling Probiotic Lemon Ginger - 15.2oz Bottle (6ct)"
  },
  {
    "name": "KeVita Sparkling Probiotic Lemon Cayenne",
    "sku": "167573",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Sparkling Probiotic Lemon Cayenne - 15.2oz Bottle (6ct)"
  },
  {
    "name": "KeVita Sparkling Probiotic Mango Coconut",
    "sku": "167575",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Sparkling Probiotic Mango Coconut - 15.2oz Bottle (6ct)"
  },
  {
    "name": "KeVita Sparkling Probiotic Strawberry Acai Coconut",
    "sku": "167578",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Sparkling Probiotic Strawberry Acai Coconut - 15.2oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Orange Juice Light",
    "sku": "168534",
    "category": "Juices & Lemonade",
    "pkg_size": "52oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Orange Juice Light - 52oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Orange Juice Low Acid",
    "sku": "168527",
    "category": "Juices & Lemonade",
    "pkg_size": "52oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Orange Juice Low Acid - 52oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Calcium Orange Juice",
    "sku": "168530",
    "category": "Juices & Lemonade",
    "pkg_size": "52oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Calcium Orange Juice - 52oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Orange Juice Grovestand Calcium",
    "sku": "168529",
    "category": "Juices & Lemonade",
    "pkg_size": "52oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Orange Juice Grovestand Calcium - 52oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Cranberry Cocktail",
    "sku": "94069",
    "category": "Juices & Lemonade",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Tropicana Cranberry Cocktail - 10oz Bottle (24ct)"
  },
  {
    "name": "Dole Ruby Red Grapefruit 100% Juice",
    "sku": "169237",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dole Ruby Red Grapefruit 100% Juice - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Peach Orchard",
    "sku": "135395",
    "category": "Juices & Lemonade",
    "pkg_size": "59oz Carton",
    "case_qty": "8",
    "upc": "",
    "full_name": "Tropicana Peach Orchard - 59oz Carton (8ct)"
  },
  {
    "name": "Twister Strawberry Kiwi",
    "sku": "173937",
    "category": "Juices & Lemonade",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Twister Strawberry Kiwi - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Viva Sol Horchata",
    "sku": "193796",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Viva Sol Horchata - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Viva Sol Jamaica",
    "sku": "193791",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Viva Sol Jamaica - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Viva Sol Pina",
    "sku": "193793",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Viva Sol Pina - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Dole Lemonade",
    "sku": "192735",
    "category": "Juices & Lemonade",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dole Lemonade - 20oz Bottle (24ct)"
  },
  {
    "name": "Dole Lemonade",
    "sku": "174204",
    "category": "Juices & Lemonade",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dole Lemonade - 20oz Bottle (24ct)"
  },
  {
    "name": "Dole Strawberry Lemonade",
    "sku": "174205",
    "category": "Juices & Lemonade",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dole Strawberry Lemonade - 20oz Bottle (24ct)"
  },
  {
    "name": "Dole Strawberry Lemonade",
    "sku": "192738",
    "category": "Juices & Lemonade",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Dole Strawberry Lemonade - 20oz Bottle (24ct)"
  },
  {
    "name": "Dole Strawberry Lemonade",
    "sku": "174207",
    "category": "Juices & Lemonade",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Dole Strawberry Lemonade - 2l Bottle (8ct)"
  },
  {
    "name": "Dole Lemonade",
    "sku": "174224",
    "category": "Juices & Lemonade",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Dole Lemonade - 2l Bottle (8ct)"
  },
  {
    "name": "Viva Sol Melon",
    "sku": "193797",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Viva Sol Melon - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Naked Juice Kale Blazer",
    "sku": "145997",
    "category": "Juices & Lemonade",
    "pkg_size": "64oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Naked Juice Kale Blazer - 64oz Bottle (6ct)"
  },
  {
    "name": "Naked Rainbow Machine",
    "sku": "197517",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Rainbow Machine - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Dole Tropical Fruit Punch",
    "sku": "171111",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dole Tropical Fruit Punch - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Neon Zebra Whiskey Sour Mix",
    "sku": "197692",
    "category": "Juices & Lemonade",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Neon Zebra Whiskey Sour Mix - 7.5oz Can (24ct)"
  },
  {
    "name": "Neon Zebra Strawberry Daiquiri Mix",
    "sku": "197694",
    "category": "Juices & Lemonade",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Neon Zebra Strawberry Daiquiri Mix - 7.5oz Can (24ct)"
  },
  {
    "name": "Neon Zebra Mojito Mix",
    "sku": "197697",
    "category": "Juices & Lemonade",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Neon Zebra Mojito Mix - 7.5oz Can (24ct)"
  },
  {
    "name": "Neon Zebra Margarita Mix",
    "sku": "197699",
    "category": "Juices & Lemonade",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Neon Zebra Margarita Mix - 7.5oz Can (24ct)"
  },
  {
    "name": "Neon Zebra Strawberry Daiquiri Mixer",
    "sku": "202415",
    "category": "Juices & Lemonade",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Neon Zebra Strawberry Daiquiri Mixer - 7.5oz Can (24ct)"
  },
  {
    "name": "Citrus Springs Pineapple Juice",
    "sku": "61819",
    "category": "Juices & Lemonade",
    "pkg_size": "2gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Citrus Springs Pineapple Juice - 2gal Bag In Box (1ct)"
  },
  {
    "name": "Fresh Watermelon Lime",
    "sku": "208367",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Fresh Watermelon Lime - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Fresh Lemonade",
    "sku": "208364",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Fresh Lemonade - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pure Craft Mango Lemonade",
    "sku": "320628",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pure Craft Mango Lemonade - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pure Craft Strawberry Watermelon",
    "sku": "320636",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pure Craft Strawberry Watermelon - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pure Craft Homestyle Lemonade",
    "sku": "320633",
    "category": "Juices & Lemonade",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pure Craft Homestyle Lemonade - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Tropicana Zero Sugar Summer Splash Punch",
    "sku": "321204",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Zero Sugar Summer Splash Punch - 12oz Bottle (12ct)"
  },
  {
    "name": "KeVita Sparkling Lemonade with Prebiotics Strawberry",
    "sku": "322830",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Sparkling Lemonade with Prebiotics Strawberry - 12oz Can (12ct)"
  },
  {
    "name": "KeVita Sparkling Lemonade with Prebiotics Mango",
    "sku": "322835",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Sparkling Lemonade with Prebiotics Mango - 12oz Can (12ct)"
  },
  {
    "name": "Bundaberg Lemonade",
    "sku": "323286",
    "category": "Juices & Lemonade",
    "pkg_size": "375ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Lemonade - 375ml Bottle (24ct)"
  },
  {
    "name": "Tropicana Apple",
    "sku": "323552",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Apple - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Cranberry Cocktail",
    "sku": "323551",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Cranberry Cocktail - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Grape",
    "sku": "323553",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Grape - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pure Premium Original Orange Juice",
    "sku": "323554",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pure Premium Original Orange Juice - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Orange Juice No Pulp with Calcium",
    "sku": "323556",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Orange Juice No Pulp with Calcium - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pure Premium Home Style Orange Juice",
    "sku": "323555",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pure Premium Home Style Orange Juice - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pineapple Mango",
    "sku": "324113",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pineapple Mango - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Classic Lemonade",
    "sku": "324112",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Classic Lemonade - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Island Punch",
    "sku": "324115",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Island Punch - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Caribbean Sunset",
    "sku": "324114",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Caribbean Sunset - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pina Colada",
    "sku": "324116",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pina Colada - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Lively Lemonade Zero Sugar",
    "sku": "324117",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Lively Lemonade Zero Sugar - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Raspberry Lemonade",
    "sku": "324118",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Raspberry Lemonade - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Strawberry Limeade",
    "sku": "324119",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Strawberry Limeade - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Summer Splash Punch Zero Sugar",
    "sku": "324121",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Summer Splash Punch Zero Sugar - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Fruit Punch Zero Sugar",
    "sku": "324131",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Fruit Punch Zero Sugar - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Some Pulp",
    "sku": "324157",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Some Pulp - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Orange Juice",
    "sku": "324162",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Orange Juice - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pineapple Mango",
    "sku": "324125",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pineapple Mango - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Lemonade Zero Sugar",
    "sku": "324136",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Lemonade Zero Sugar - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Lemonade",
    "sku": "324126",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Lemonade - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Orange Low Acid",
    "sku": "324159",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Orange Low Acid - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Grapefruit",
    "sku": "324163",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Grapefruit - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Orange Juice Lots of Pulp",
    "sku": "324156",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Orange Juice Lots of Pulp - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Strawberry Peach",
    "sku": "324129",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Strawberry Peach - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Orange Juice",
    "sku": "324161",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Orange Juice - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Peach Pineapple",
    "sku": "324128",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Peach Pineapple - 46oz Bottle (6ct)"
  },
  {
    "name": "Tropicana Pure Premium Orange Tangerine",
    "sku": "324160",
    "category": "Juices & Lemonade",
    "pkg_size": "46oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "Tropicana Pure Premium Orange Tangerine - 46oz Bottle (6ct)"
  },
  {
    "name": "KeVita Probiotic Refresher Sparkling Mojita Lime Mint Coconut",
    "sku": "322705",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Probiotic Refresher Sparkling Mojita Lime Mint Coconut - 12oz Can (12ct)"
  },
  {
    "name": "KeVita Priobiotic Refresher Sparkling Strawberry Acai Coconut",
    "sku": "322701",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Priobiotic Refresher Sparkling Strawberry Acai Coconut - 12oz Can (12ct)"
  },
  {
    "name": "KeVita Probiotic Refresher Sparkling Lemon Ginger",
    "sku": "322700",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Probiotic Refresher Sparkling Lemon Ginger - 12oz Can (12ct)"
  },
  {
    "name": "KeVita Probiotic Refresher Sparkling Lemon Cayenne",
    "sku": "322702",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Probiotic Refresher Sparkling Lemon Cayenne - 12oz Can (12ct)"
  },
  {
    "name": "KeVita Sparkling with Prebiotics Lemonade Classic",
    "sku": "322840",
    "category": "Juices & Lemonade",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "KeVita Sparkling with Prebiotics Lemonade Classic - 12oz Can (12ct)"
  },
  {
    "name": "Tropicana Pure Premium Original Orange Juice",
    "sku": "325663",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pure Premium Original Orange Juice - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pure Premium Calcium Orange Juice",
    "sku": "325665",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pure Premium Calcium Orange Juice - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pure Premium Homestyle Orange Juice",
    "sku": "325664",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pure Premium Homestyle Orange Juice - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Cranberry Cocktail",
    "sku": "325666",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Cranberry Cocktail - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Apple",
    "sku": "325667",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Apple - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Grape",
    "sku": "325669",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Grape - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Tropical Punch",
    "sku": "325674",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Tropical Punch - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Lively Lemonade",
    "sku": "325671",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Lively Lemonade - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Raspberry Lemonade",
    "sku": "325672",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Raspberry Lemonade - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pineapple Mango",
    "sku": "325673",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pineapple Mango - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Pina Colada",
    "sku": "325676",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Pina Colada - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Fruit Punch",
    "sku": "325675",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Fruit Punch - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Fruit Punch Zero Sugar",
    "sku": "325678",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Fruit Punch Zero Sugar - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Strawberry Lemonade",
    "sku": "325681",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Strawberry Lemonade - 11oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Classic Lemonade",
    "sku": "325680",
    "category": "Juices & Lemonade",
    "pkg_size": "11oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Classic Lemonade - 11oz Bottle (12ct)"
  },
  {
    "name": "Brisk Iced Tea Lemonade",
    "sku": "325282",
    "category": "Juices & Lemonade",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemonade - 16oz Can (12ct)"
  },
  {
    "name": "Dole Orange Blend",
    "sku": "325954",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Dole Orange Blend - 15.2oz Bottle (12ct)"
  },
  {
    "name": "Tropicana Juice Orange Blend",
    "sku": "325961",
    "category": "Juices & Lemonade",
    "pkg_size": "32oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Tropicana Juice Orange Blend - 32oz Bottle (12ct)"
  },
  {
    "name": "Naked Mighty Mango Machine",
    "sku": "129381",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Mighty Mango Machine - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Naked Double Berry Protein",
    "sku": "331007",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Double Berry Protein - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Naked Coco Gauff's Protein Pineapple Orange",
    "sku": "335437",
    "category": "Juices & Lemonade",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Naked Coco Gauff's Protein Pineapple Orange - 15.2oz Bottle (8ct)"
  },
  {
    "name": "Schweppes Club Soda",
    "sku": "3789",
    "category": "Waters",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Club Soda - 10oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Tonic Water",
    "sku": "3838",
    "category": "Waters",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Tonic Water - 10oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Tonic Water (Fountain)",
    "sku": "19621",
    "category": "Waters",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Schweppes Tonic Water (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Schweppes Tonic Water Zero Sugar",
    "sku": "30867",
    "category": "Waters",
    "pkg_size": "10oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Tonic Water Zero Sugar - 10oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "31321",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "012000001598",
    "full_name": "Aquafina Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "32065",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Aquafina Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Club Soda",
    "sku": "32766",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Club Soda - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Tonic Water",
    "sku": "32767",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Tonic Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Tonic Water Zero Sugar",
    "sku": "32768",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Tonic Water Zero Sugar - 1l Bottle (15ct)"
  },
  {
    "name": "Propel Grape",
    "sku": "104842",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Grape - 20oz Bottle (24ct)"
  },
  {
    "name": "Propel Berry",
    "sku": "104844",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Berry - 20oz Bottle (24ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "104843",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 20oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "121660",
    "category": "Waters",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Aquafina Water - 12oz Bottle (24ct)"
  },
  {
    "name": "SoBeWater Yumberry Pomegranate (Fountain)",
    "sku": "138867",
    "category": "Waters",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "SoBeWater Yumberry Pomegranate (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Vita Ice Cranberry",
    "sku": "144004",
    "category": "Waters",
    "pkg_size": "17oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Vita Ice Cranberry - 17oz Bottle (12ct)"
  },
  {
    "name": "Vita Ice Cucumber Lime",
    "sku": "144005",
    "category": "Waters",
    "pkg_size": "17oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Vita Ice Cucumber Lime - 17oz Bottle (12ct)"
  },
  {
    "name": "Vita Ice Lemonade",
    "sku": "151787",
    "category": "Waters",
    "pkg_size": "17oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Vita Ice Lemonade - 17oz Bottle (12ct)"
  },
  {
    "name": "Vita Ice Peach Mango",
    "sku": "151800",
    "category": "Waters",
    "pkg_size": "17oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Vita Ice Peach Mango - 17oz Bottle (12ct)"
  },
  {
    "name": "Vita Ice Pineapple Coconut",
    "sku": "151802",
    "category": "Waters",
    "pkg_size": "17oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Vita Ice Pineapple Coconut - 17oz Bottle (12ct)"
  },
  {
    "name": "Schweppes Black Cherry Sparkling Seltzer Water",
    "sku": "152397",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Black Cherry Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Lemon Lime Sparkling Seltzer Water",
    "sku": "152421",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Lemon Lime Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Sparkling Seltzer Water",
    "sku": "152494",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "LIFEWTR",
    "sku": "159298",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "LIFEWTR - 1l Bottle (12ct)"
  },
  {
    "name": "LIFEWTR",
    "sku": "159301",
    "category": "Waters",
    "pkg_size": "700ml Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "LIFEWTR - 700ml Bottle (12ct)"
  },
  {
    "name": "Propel Watermelon",
    "sku": "159435",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Watermelon - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Black Cherry Sparkling Seltzer Water (3/8 Packs)",
    "sku": "159745",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Black Cherry Sparkling Seltzer Water (3/8 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Canada Dry Tonic Water (4/6 Packs)",
    "sku": "3550",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Canada Dry Tonic Water (4/6 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "30346",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Aquafina Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "30347",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Aquafina Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Club Soda",
    "sku": "30974",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Club Soda - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Tonic Water Zero Sugar",
    "sku": "30977",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Tonic Water Zero Sugar - 1l Bottle (15ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "31609",
    "category": "Waters",
    "pkg_size": "1.5l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Aquafina Water - 1.5l Bottle (12ct)"
  },
  {
    "name": "Schweppes Club Soda",
    "sku": "32159",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Schweppes Club Soda - 1l Bottle (12ct)"
  },
  {
    "name": "Schweppes Sparkling Seltzer Water",
    "sku": "32837",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Sparkling Seltzer Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Sparkling Seltzer Water",
    "sku": "39761",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Schweppes Sparkling Seltzer Water - 1l Bottle (12ct)"
  },
  {
    "name": "Schweppes Lemon Lime Sparkling Seltzer Water",
    "sku": "67735",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Lemon Lime Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "96228",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Aquafina Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "96663",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Aquafina Water - 1l Bottle (15ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "122959",
    "category": "Waters",
    "pkg_size": "12oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Aquafina Water - 12oz Bottle (24ct)"
  },
  {
    "name": "Aquafina Water Non Vendible",
    "sku": "126670",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Aquafina Water Non Vendible - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Black Cherry Sparkling Seltzer Water (2/12 Packs)",
    "sku": "137646",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Black Cherry Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Lemon Lime Sparkling Seltzer Water (2/12 Packs)",
    "sku": "137647",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Lemon Lime Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Sparkling Seltzer Water (2/12 Packs)",
    "sku": "137652",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Black Cherry Sparkling Seltzer Water",
    "sku": "137738",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Black Cherry Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Orange Sparkling Seltzer Water",
    "sku": "137741",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Orange Sparkling Seltzer Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Orange Sparkling Seltzer Water (2/12 Packs)",
    "sku": "137649",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Orange Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Raspberry Lime Sparkling Seltzer Water (2/12 Packs)",
    "sku": "142247",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Raspberry Lime Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Raspberry Lime Sparkling Seltzer Water",
    "sku": "142251",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Raspberry Lime Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Raspberry Lime Sparkling Seltzer Water",
    "sku": "142250",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Raspberry Lime Sparkling Seltzer Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Pomegranate Sparkling Seltzer Water",
    "sku": "146661",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Schweppes Pomegranate Sparkling Seltzer Water - 1l Bottle (15ct)"
  },
  {
    "name": "Schweppes Cranberry Lime Sparkling Seltzer Water (2/12 Packs)",
    "sku": "148503",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Cranberry Lime Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Cranberry Lime Sparkling Seltzer Water",
    "sku": "148681",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Cranberry Lime Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Black Cherry Sparkling Seltzer Water (2/12 Packs)",
    "sku": "152390",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Black Cherry Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Raspberry Lime Sparkling Seltzer Water (2/12 Packs)",
    "sku": "152474",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Raspberry Lime Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Sparkling Seltzer Water",
    "sku": "152492",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Sparkling Seltzer Water - 20oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Lemon Lime Sparkling Seltzer Water (2/12 Packs)",
    "sku": "152423",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Lemon Lime Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "LIFEWTR",
    "sku": "159300",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "LIFEWTR - 1l Bottle (12ct)"
  },
  {
    "name": "Schweppes Pink Grapefruit Sparkling Seltzer Water (2/12 Packs)",
    "sku": "160777",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Pink Grapefruit Sparkling Seltzer Water (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "LIFEWTR",
    "sku": "164970",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "LIFEWTR - 20oz Bottle (24ct)"
  },
  {
    "name": "bubly cherry",
    "sku": "165041",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly cherry - 12oz Can (24ct)"
  },
  {
    "name": "bubly mango (3/8 Packs)",
    "sku": "165045",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly mango (3/8 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "bubly lemon (3/8 Packs)",
    "sku": "165043",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly lemon (3/8 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Propel Strawberry Lemonade",
    "sku": "164788",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Strawberry Lemonade - 20oz Bottle (24ct)"
  },
  {
    "name": "LIFEWTR",
    "sku": "164766",
    "category": "Waters",
    "pkg_size": "500ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "LIFEWTR - 500ml Bottle (24ct)"
  },
  {
    "name": "bubly strawberry (24 Pack)",
    "sku": "168058",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly strawberry (24 Pack) - 12oz Can (24ct)"
  },
  {
    "name": "bubly lime (Fountain)",
    "sku": "168250",
    "category": "Waters",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "bubly lime (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "bubly raspberry (Fountain)",
    "sku": "168253",
    "category": "Waters",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "bubly raspberry (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "bubly raspberry (3/8 Packs)",
    "sku": "168917",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly raspberry (3/8 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Schweppes Tonic Water",
    "sku": "169282",
    "category": "Waters",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Tonic Water - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Club Soda",
    "sku": "169283",
    "category": "Waters",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Club Soda - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Tonic Water Zero Sugar",
    "sku": "169293",
    "category": "Waters",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Tonic Water Zero Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "bubly grapefruit",
    "sku": "171853",
    "category": "Waters",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "bubly grapefruit - 16oz Can (12ct)"
  },
  {
    "name": "bubly lime",
    "sku": "171884",
    "category": "Waters",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "bubly lime - 16oz Can (12ct)"
  },
  {
    "name": "bubly blackberry",
    "sku": "173731",
    "category": "Waters",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "bubly blackberry - 16oz Can (12ct)"
  },
  {
    "name": "bubly strawberry",
    "sku": "171890",
    "category": "Waters",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "bubly strawberry - 16oz Can (12ct)"
  },
  {
    "name": "bubly blueberry pomegranate",
    "sku": "171846",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly blueberry pomegranate - 12oz Can (24ct)"
  },
  {
    "name": "Aquafina Water",
    "sku": "194090",
    "category": "Waters",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Aquafina Water - 16oz Bottle (24ct)"
  },
  {
    "name": "Propel Immune Support Orange Raspberry",
    "sku": "197197",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Immune Support Orange Raspberry - 20oz Bottle (24ct)"
  },
  {
    "name": "Proud Source Water",
    "sku": "194063",
    "category": "Waters",
    "pkg_size": "16oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Proud Source Water - 16oz Bottle (24ct)"
  },
  {
    "name": "Proud Source Water",
    "sku": "197976",
    "category": "Waters",
    "pkg_size": "750ml Wide Mouth",
    "case_qty": "12",
    "upc": "",
    "full_name": "Proud Source Water - 750ml Wide Mouth (12ct)"
  },
  {
    "name": "Propel Grape",
    "sku": "199656",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Grape - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Berry",
    "sku": "199655",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Berry - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "199785",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Watermelon",
    "sku": "199660",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Watermelon - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Black Cherry",
    "sku": "199657",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Black Cherry - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Peach",
    "sku": "199658",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Peach - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Mango",
    "sku": "199659",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Mango - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Immune Support Orange Raspberry",
    "sku": "200914",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Immune Support Orange Raspberry - 20oz Bottle (12ct)"
  },
  {
    "name": "Propel Strawberry Lemonade",
    "sku": "202055",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Strawberry Lemonade - 20oz Bottle (12ct)"
  },
  {
    "name": "LIFEWTR (2/6 Packs)",
    "sku": "202765",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "LIFEWTR (2/6 Packs) - 1l Bottle (12ct)"
  },
  {
    "name": "bubly coconut pineapple",
    "sku": "200409",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly coconut pineapple - 12oz Can (24ct)"
  },
  {
    "name": "Propel Immune Support Lemon Blackberry",
    "sku": "197171",
    "category": "Waters",
    "pkg_size": "24oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Immune Support Lemon Blackberry - 24oz Bottle (12ct)"
  },
  {
    "name": "Propel Immune Support Orange Raspberry",
    "sku": "197172",
    "category": "Waters",
    "pkg_size": "24oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Immune Support Orange Raspberry - 24oz Bottle (12ct)"
  },
  {
    "name": "BUBBL'R twisted elix'r",
    "sku": "201325",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R twisted elix'r - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R pitaya berry nect'r",
    "sku": "201327",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R pitaya berry nect'r - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R cherry guava",
    "sku": "201326",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R cherry guava - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R pomegranate acai refresh'r",
    "sku": "201329",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R pomegranate acai refresh'r - 12oz Can (24ct)"
  },
  {
    "name": "Propel Berry",
    "sku": "205478",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Berry - 1l Bottle (12ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "205479",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 1l Bottle (12ct)"
  },
  {
    "name": "BUBBL'R lemon lime twist'r",
    "sku": "201332",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R lemon lime twist'r - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R triple berry breez'r",
    "sku": "206281",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R triple berry breez'r - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R triple berry breez'r",
    "sku": "206282",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "BUBBL'R triple berry breez'r - 12oz Can (12ct)"
  },
  {
    "name": "Proud Source Sparkling Water",
    "sku": "207368",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Proud Source Sparkling Water - 12oz Can (24ct)"
  },
  {
    "name": "Proud Source Water",
    "sku": "207367",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Proud Source Water - 12oz Can (24ct)"
  },
  {
    "name": "bubly bellini bliss",
    "sku": "207016",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly bellini bliss - 12oz Can (24ct)"
  },
  {
    "name": "Propel Grape",
    "sku": "205480",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Grape - 1l Bottle (12ct)"
  },
  {
    "name": "BUBBL'R tropical dream'r",
    "sku": "320442",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R tropical dream'r - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R tropical dream'r",
    "sku": "320443",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "BUBBL'R tropical dream'r - 12oz Can (12ct)"
  },
  {
    "name": "bubly orange cream",
    "sku": "209287",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly orange cream - 12oz Can (24ct)"
  },
  {
    "name": "Propel Mango",
    "sku": "168027",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Mango - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Immune Support Orange Raspberry",
    "sku": "197173",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Immune Support Orange Raspberry - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Propel Black Cherry",
    "sku": "194306",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Black Cherry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Immune Support Orange Raspberry",
    "sku": "197555",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Immune Support Orange Raspberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Immune Support Pineapple Peach",
    "sku": "203738",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Immune Support Pineapple Peach - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Immune Support Lemon Blackberry",
    "sku": "197556",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Immune Support Lemon Blackberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Mango",
    "sku": "168028",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Mango - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Propel Immune Support Pineapple Peach",
    "sku": "203520",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Immune Support Pineapple Peach - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Schweppes Club Soda",
    "sku": "322292",
    "category": "Waters",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Club Soda - 7.5oz Can (24ct)"
  },
  {
    "name": "Propel Grape",
    "sku": "128024",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Grape - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Berry",
    "sku": "128022",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Berry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Grape",
    "sku": "128023",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Grape - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "128025",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "128026",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "BUBBL'R watermelon lime smash'r",
    "sku": "323270",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "BUBBL'R watermelon lime smash'r - 12oz Can (12ct)"
  },
  {
    "name": "BUBBL'R watermelon lime smash'r",
    "sku": "323271",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R watermelon lime smash'r - 12oz Can (24ct)"
  },
  {
    "name": "Gatorade Water",
    "sku": "322420",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Water - 1l Bottle (12ct)"
  },
  {
    "name": "Gatorade Water",
    "sku": "322417",
    "category": "Waters",
    "pkg_size": "700ml Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Water - 700ml Bottle (12ct)"
  },
  {
    "name": "bubly strawberry sunset",
    "sku": "322683",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly strawberry sunset - 12oz Can (24ct)"
  },
  {
    "name": "Gatorade Water",
    "sku": "322421",
    "category": "Waters",
    "pkg_size": "1l Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Water - 1l Bottle (12ct)"
  },
  {
    "name": "Schweppes Tonic Water",
    "sku": "322293",
    "category": "Waters",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Tonic Water - 7.5oz Can (24ct)"
  },
  {
    "name": "Schweppes Tonic Water Zero Sugar",
    "sku": "322294",
    "category": "Waters",
    "pkg_size": "7.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Schweppes Tonic Water Zero Sugar - 7.5oz Can (24ct)"
  },
  {
    "name": "BUBBL'R Wild Cherry Chiller",
    "sku": "322538",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R Wild Cherry Chiller - 12oz Can (24ct)"
  },
  {
    "name": "bubly grapefruit",
    "sku": "165042",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly grapefruit - 12oz Can (24ct)"
  },
  {
    "name": "bubly blackberry (3/8 Packs)",
    "sku": "168919",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly blackberry (3/8 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "bubly strawberry (3/8 Packs)",
    "sku": "165047",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly strawberry (3/8 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "bubly lime",
    "sku": "165044",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly lime - 12oz Can (24ct)"
  },
  {
    "name": "Propel Lemon",
    "sku": "120374",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Lemon - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Grape",
    "sku": "324841",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Grape - 12oz Can (24ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "324842",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 12oz Can (24ct)"
  },
  {
    "name": "Propel Variety Pack",
    "sku": "194513",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Propel Variety Pack - 16.9oz Bottle (18ct)"
  },
  {
    "name": "Propel Energy Boost Passionfruit Guava",
    "sku": "208723",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Energy Boost Passionfruit Guava - 20oz Bottle (12ct)"
  },
  {
    "name": "Gatorade Water",
    "sku": "324729",
    "category": "Waters",
    "pkg_size": "20oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Gatorade Water - 20oz Bottle (12ct)"
  },
  {
    "name": "BUBBL'R peach raspberry dazzl'r",
    "sku": "325516",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R peach raspberry dazzl'r - 12oz Can (24ct)"
  },
  {
    "name": "Propel Energy Boost Passionfruit Guava",
    "sku": "325560",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Energy Boost Passionfruit Guava - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Energy Boost Raspberry Green Tea",
    "sku": "325559",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Energy Boost Raspberry Green Tea - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Propel Energy Boost Raspberry Green Tea",
    "sku": "325561",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Energy Boost Raspberry Green Tea - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Energy Boost Passionfruit Guava",
    "sku": "325562",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Propel Energy Boost Passionfruit Guava - 16.9oz Bottle (12ct)"
  },
  {
    "name": "BUBBL'R orange dream freez'r LTO",
    "sku": "326743",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R orange dream freez'r LTO - 12oz Can (24ct)"
  },
  {
    "name": "BUBBL'R orange dream freez'r LTO",
    "sku": "326744",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "BUBBL'R orange dream freez'r LTO - 12oz Can (12ct)"
  },
  {
    "name": "Propel Black Cherry",
    "sku": "128019",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Black Cherry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Lemon",
    "sku": "128028",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Lemon - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Peach",
    "sku": "128029",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Peach - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Berry",
    "sku": "120373",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Berry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Propel Kiwi Strawberry",
    "sku": "120376",
    "category": "Waters",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Propel Kiwi Strawberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "BUBBL'R fruit punch'r",
    "sku": "331450",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "BUBBL'R fruit punch'r - 12oz Can (12ct)"
  },
  {
    "name": "BUBBL'R fruit punch'r",
    "sku": "331451",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "BUBBL'R fruit punch'r - 12oz Can (24ct)"
  },
  {
    "name": "bubly dragonfruit stardust LTO",
    "sku": "331208",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly dragonfruit stardust LTO - 12oz Can (24ct)"
  },
  {
    "name": "bubly cosmic swirl LTO",
    "sku": "331207",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly cosmic swirl LTO - 12oz Can (24ct)"
  },
  {
    "name": "bubly meteor melon LTO",
    "sku": "331209",
    "category": "Waters",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "bubly meteor melon LTO - 12oz Can (24ct)"
  },
  {
    "name": "Brisk Iced Tea Unsweetened (Fountain)",
    "sku": "7537",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Unsweetened (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Raspberry (Fountain)",
    "sku": "16180",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Raspberry (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Frappuccino Mocha (6/4 Packs)",
    "sku": "32077",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "24",
    "upc": "012000001802",
    "full_name": "Frappuccino Mocha (6/4 Packs) - 9.5oz Bottle (24ct)"
  },
  {
    "name": "Frappuccino Coffee (6/4 Packs)",
    "sku": "32078",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "24",
    "upc": "012000016721",
    "full_name": "Frappuccino Coffee (6/4 Packs) - 9.5oz Bottle (24ct)"
  },
  {
    "name": "Frappuccino Vanilla (6/4 Packs)",
    "sku": "37091",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "24",
    "upc": "012000004520",
    "full_name": "Frappuccino Vanilla (6/4 Packs) - 9.5oz Bottle (24ct)"
  },
  {
    "name": "Frappuccino Mocha",
    "sku": "57933",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "15",
    "upc": "012000813313",
    "full_name": "Frappuccino Mocha - 9.5oz Bottle (15ct)"
  },
  {
    "name": "Starbucks Frappuccino Caramel (6/4 Packs)",
    "sku": "62224",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "24",
    "upc": "012000151095",
    "full_name": "Starbucks Frappuccino Caramel (6/4 Packs) - 9.5oz Bottle (24ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "69294",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 20oz Bottle (24ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "69437",
    "category": "Coffees & Teas",
    "pkg_size": "2l Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 2l Bottle (8ct)"
  },
  {
    "name": "Frappuccino Coffee",
    "sku": "69806",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "012000160103",
    "full_name": "Frappuccino Coffee - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Frappuccino Mocha",
    "sku": "69807",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Mocha - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Espresso & Cream",
    "sku": "82697",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Espresso & Cream - 6.5oz Can (12ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon (2/12 Packs)",
    "sku": "83789",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Brisk Iced Tea Raspberry (2/12 Packs)",
    "sku": "83795",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Iced Tea Raspberry (2/12 Packs) - 12oz Can (24ct)"
  },
  {
    "name": "Starbucks Espresso & Cream",
    "sku": "85731",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starbucks Espresso & Cream - 6.5oz Can (24ct)"
  },
  {
    "name": "Frappuccino Vanilla",
    "sku": "88159",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Vanilla - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Citrus",
    "sku": "92373",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Citrus - 20oz Bottle (24ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Citrus",
    "sku": "92374",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Citrus - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Green Tea Citrus",
    "sku": "92375",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Green Tea Citrus - 20oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Green Tea Citrus",
    "sku": "92376",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Green Tea Citrus - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Espresso & Cream Light",
    "sku": "95959",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starbucks Espresso & Cream Light - 6.5oz Can (24ct)"
  },
  {
    "name": "Lipton Iced Tea Peach",
    "sku": "96848",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Peach - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Tea Peach Zero Sugar",
    "sku": "96849",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Peach Zero Sugar - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Mixed Berry",
    "sku": "96850",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Mixed Berry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Tea Peach",
    "sku": "96864",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Peach - 20oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Tea White Raspberry",
    "sku": "102081",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea White Raspberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Coffee",
    "sku": "106007",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Coffee - 15oz Can (12ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Coffee Mocha",
    "sku": "106008",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Coffee Mocha - 15oz Can (12ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "106086",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 1l Bottle (15ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Coffee Vanilla",
    "sku": "106009",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Coffee Vanilla - 15oz Can (12ct)"
  },
  {
    "name": "Brisk Iced Tea Raspberry",
    "sku": "106087",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Raspberry - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Sweet Tea",
    "sku": "122607",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Sweet Tea - 1l Bottle (15ct)"
  },
  {
    "name": "Lipton Unsweetened Liquid Concentrate Dispensed Tea",
    "sku": "126951",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Lipton Unsweetened Liquid Concentrate Dispensed Tea - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Lipton Sweetened Liquid Concentrate Dispensed Tea",
    "sku": "130042",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Lipton Sweetened Liquid Concentrate Dispensed Tea - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy White Chocolate",
    "sku": "132858",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy White Chocolate - 15oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Raspberry",
    "sku": "133242",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Raspberry - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Sweet Tea",
    "sku": "134071",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Sweet Tea - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Raspberry",
    "sku": "134074",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Raspberry - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Unsweetened",
    "sku": "134072",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Lemon",
    "sku": "134073",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Lemon - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Extra Sweet Tea",
    "sku": "134082",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Extra Sweet Tea - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappuccino Caramel",
    "sku": "136599",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino Caramel - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Tea & Lemonade",
    "sku": "141750",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Tea & Lemonade - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Unsweetened",
    "sku": "148364",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened - 64oz Bottle (8ct)"
  },
  {
    "name": "Pure Leaf Sweet Tea",
    "sku": "148925",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pure Leaf Sweet Tea - 64oz Bottle (8ct)"
  },
  {
    "name": "Pure Leaf Lemon",
    "sku": "148926",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pure Leaf Lemon - 64oz Bottle (8ct)"
  },
  {
    "name": "Pure Leaf Extra Sweet Tea",
    "sku": "150649",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pure Leaf Extra Sweet Tea - 64oz Bottle (8ct)"
  },
  {
    "name": "Frappuccino Vanilla",
    "sku": "151215",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Frappuccino Vanilla - 9.5oz Bottle (15ct)"
  },
  {
    "name": "Pure Leaf Unsweetened Green Tea",
    "sku": "154710",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened Green Tea - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Unsweetened Lemon",
    "sku": "154713",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened Lemon - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappuccino White Chocolate Mocha",
    "sku": "154902",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino White Chocolate Mocha - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Brisk Iced Tea Strawberry Melon (Fountain)",
    "sku": "159079",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Strawberry Melon (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Strawberry Melon",
    "sku": "159493",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Strawberry Melon - 1l Bottle (15ct)"
  },
  {
    "name": "Pure Leaf Raspberry",
    "sku": "159523",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pure Leaf Raspberry - 64oz Bottle (8ct)"
  },
  {
    "name": "Starbucks Espresso & Salted Caramel Cream",
    "sku": "159662",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Espresso & Salted Caramel Cream - 6.5oz Can (12ct)"
  },
  {
    "name": "Frappuccino Dulce De Leche",
    "sku": "159701",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Dulce De Leche - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon (Fountain)",
    "sku": "7530",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon (Fountain)",
    "sku": "7531",
    "category": "Coffees & Teas",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Unsweetened (Fountain)",
    "sku": "7538",
    "category": "Coffees & Teas",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Unsweetened (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Raspberry (Fountain)",
    "sku": "15086",
    "category": "Coffees & Teas",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Iced Tea Raspberry (Fountain) - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Frappuccino Coffee",
    "sku": "32075",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Coffee - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Frappuccino Mocha",
    "sku": "32076",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Mocha - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Brisk Sweet Tea (Fountain)",
    "sku": "33188",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Brisk Sweet Tea (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "69285",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 12oz Can (24ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "81270",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 20oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Espresso & Cream",
    "sku": "81687",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Espresso & Cream - 6.5oz Can (12ct)"
  },
  {
    "name": "Lipton Zero Sugar Iced Tea Lemon",
    "sku": "92372",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Iced Tea Lemon - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Green Tea Citrus",
    "sku": "95206",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Green Tea Citrus - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Citrus",
    "sku": "95207",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Citrus - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Green Tea Citrus",
    "sku": "99687",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Green Tea Citrus - 20oz Bottle (24ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Citrus",
    "sku": "102481",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Citrus - 20oz Bottle (24ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "105517",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Iced Tea Raspberry",
    "sku": "105518",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Raspberry - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Sweet Tea",
    "sku": "121995",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Sweet Tea - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Iced Tea Strawberry Melon",
    "sku": "123246",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Strawberry Melon - 1l Bottle (15ct)"
  },
  {
    "name": "Lipton Half & Half Iced Tea Lemonade",
    "sku": "125434",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Half & Half Iced Tea Lemonade - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Pure Leaf Zero Sugar Peach",
    "sku": "134078",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Zero Sugar Peach - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Peach",
    "sku": "134076",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Peach - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Honey Green Tea",
    "sku": "137642",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Honey Green Tea - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Hazelnut",
    "sku": "141600",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Hazelnut - 15oz Can (12ct)"
  },
  {
    "name": "Lipton Iced Tea Peach",
    "sku": "142240",
    "category": "Coffees & Teas",
    "pkg_size": "20oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Peach - 20oz Bottle (24ct)"
  },
  {
    "name": "Lipton Peach Liquid Concentrate Dispensed Tea",
    "sku": "143412",
    "category": "Coffees & Teas",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Lipton Peach Liquid Concentrate Dispensed Tea - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Frappuccino Mocha Coconut",
    "sku": "147591",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Mocha Coconut - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappuccino Caramel",
    "sku": "156108",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Starbucks Frappuccino Caramel - 9.5oz Bottle (15ct)"
  },
  {
    "name": "Starbucks Frappuccino Pumpkin Spice",
    "sku": "157912",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Starbucks Frappuccino Pumpkin Spice - 9.5oz Bottle (15ct)"
  },
  {
    "name": "Frappuccino Mocha",
    "sku": "158168",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Frappuccino Mocha - 9.5oz Bottle (15ct)"
  },
  {
    "name": "Brisk Iced Tea Strawberry Melon",
    "sku": "159492",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Iced Tea Strawberry Melon - 1l Bottle (15ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Coffee Mocha",
    "sku": "160654",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Coffee Mocha - 11oz Can (24ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Coffee Vanilla",
    "sku": "160656",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Coffee Vanilla - 11oz Can (24ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "121349",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Frappuccino Caramel",
    "sku": "158167",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Starbucks Frappuccino Caramel - 9.5oz Bottle (15ct)"
  },
  {
    "name": "Tea Kitchen Fresh Brewed Iced Tea",
    "sku": "163717",
    "category": "Coffees & Teas",
    "pkg_size": "3oz Packet",
    "case_qty": "32",
    "upc": "",
    "full_name": "Tea Kitchen Fresh Brewed Iced Tea - 3oz Packet (32ct)"
  },
  {
    "name": "Lipton Fresh Brewed Iced Tea",
    "sku": "163718",
    "category": "Coffees & Teas",
    "pkg_size": "3oz Pod",
    "case_qty": "32",
    "upc": "",
    "full_name": "Lipton Fresh Brewed Iced Tea - 3oz Pod (32ct)"
  },
  {
    "name": "Lipton Iced Tea Peach",
    "sku": "144297",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Peach - 16.9oz Bottle (24ct)"
  },
  {
    "name": "KeVita Live Probiotics Pineapple Peach",
    "sku": "167568",
    "category": "Coffees & Teas",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Live Probiotics Pineapple Peach - 15.2oz Bottle (6ct)"
  },
  {
    "name": "KeVita Live Probiotics Ginger",
    "sku": "167565",
    "category": "Coffees & Teas",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Live Probiotics Ginger - 15.2oz Bottle (6ct)"
  },
  {
    "name": "KeVita Live Probiotics Raspberry Lemon",
    "sku": "167569",
    "category": "Coffees & Teas",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Live Probiotics Raspberry Lemon - 15.2oz Bottle (6ct)"
  },
  {
    "name": "KeVita Live Probiotics Tart Cherry",
    "sku": "167570",
    "category": "Coffees & Teas",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Live Probiotics Tart Cherry - 15.2oz Bottle (6ct)"
  },
  {
    "name": "Lipton Half & Half Iced Tea Lemonade",
    "sku": "125294",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Half & Half Iced Tea Lemonade - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy French Vanilla",
    "sku": "169444",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy French Vanilla - 15oz Can (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Caff\u00e8 Mocha",
    "sku": "169443",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Caff\u00e8 Mocha - 15oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Lemon (2/6 Packs)",
    "sku": "169097",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Lemon (2/6 Packs) - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Sweet Tea",
    "sku": "169107",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Sweet Tea - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Peach",
    "sku": "169092",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Peach - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Unsweetened",
    "sku": "169094",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Raspberry (2/6 Packs)",
    "sku": "169096",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Raspberry (2/6 Packs) - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Extra Sweet Tea (2/6 Packs)",
    "sku": "169089",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Extra Sweet Tea (2/6 Packs) - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Sweet Tea",
    "sku": "169287",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Pure Leaf Sweet Tea - 16.9oz Bottle (18ct)"
  },
  {
    "name": "Pure Leaf Unsweetened",
    "sku": "169367",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened - 16.9oz Bottle (18ct)"
  },
  {
    "name": "Frappuccino Mocha",
    "sku": "89229",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Mocha - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Sweet Tea",
    "sku": "165838",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Sweet Tea - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Nitro Cold Brew Black",
    "sku": "174228",
    "category": "Coffees & Teas",
    "pkg_size": "9.6oz Can",
    "case_qty": "12",
    "upc": "012000211997",
    "full_name": "Starbucks Nitro Cold Brew Black - 9.6oz Can (12ct)"
  },
  {
    "name": "Starbucks Doubleshot Espresso Americano",
    "sku": "173477",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Starbucks Doubleshot Espresso Americano - 6.5oz Can (24ct)"
  },
  {
    "name": "Pure Leaf Unsweetened",
    "sku": "165839",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Frappuccino Vanilla",
    "sku": "37096",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Vanilla - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Zero Sugar Vanilla",
    "sku": "195878",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Zero Sugar Vanilla - 15oz Can (12ct)"
  },
  {
    "name": "Frappuccino Caramel Flan",
    "sku": "198930",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Caramel Flan - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Citrus",
    "sku": "197743",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Citrus - 64oz Bottle (8ct)"
  },
  {
    "name": "Lipton Iced Tea Sweet Tea",
    "sku": "197747",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Lipton Iced Tea Sweet Tea - 64oz Bottle (8ct)"
  },
  {
    "name": "Lipton Iced Tea Peach",
    "sku": "197752",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Lipton Iced Tea Peach - 64oz Bottle (8ct)"
  },
  {
    "name": "Lipton Iced Green Tea Citrus",
    "sku": "197754",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Lipton Iced Green Tea Citrus - 64oz Bottle (8ct)"
  },
  {
    "name": "Lipton Iced Tea Texas Sweet Tea",
    "sku": "198143",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Lipton Iced Tea Texas Sweet Tea - 64oz Bottle (8ct)"
  },
  {
    "name": "Pure Leaf Raspberry",
    "sku": "200204",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Raspberry - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Yachak Organic Yerba Mate Ultimate Mint",
    "sku": "201347",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Yachak Organic Yerba Mate Ultimate Mint - 16oz Can (12ct)"
  },
  {
    "name": "Yachak Organic Yerba Mate Berry Blue",
    "sku": "201342",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Yachak Organic Yerba Mate Berry Blue - 16oz Can (12ct)"
  },
  {
    "name": "Yachak Organic Yerba Mate Passion Fruit",
    "sku": "201352",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Yachak Organic Yerba Mate Passion Fruit - 16oz Can (12ct)"
  },
  {
    "name": "Yachak Organic Yerba Mate Blackberry",
    "sku": "201354",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Yachak Organic Yerba Mate Blackberry - 16oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Extra Sweet Tea",
    "sku": "200205",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Extra Sweet Tea - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Pineapple Mango",
    "sku": "206683",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Pineapple Mango - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Frappuccino Oat Milk Dark Chocolate Brownie",
    "sku": "204240",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino Oat Milk Dark Chocolate Brownie - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappucinno Oatmilk Caramel Waffle Cookie",
    "sku": "204238",
    "category": "Coffees & Teas",
    "pkg_size": "13.7oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappucinno Oatmilk Caramel Waffle Cookie - 13.7oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Nitro Cold Brew Pumpkin Cream LTO",
    "sku": "208006",
    "category": "Coffees & Teas",
    "pkg_size": "9.6oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Nitro Cold Brew Pumpkin Cream LTO - 9.6oz Can (12ct)"
  },
  {
    "name": "KeVita Sparkling Ginger Colada",
    "sku": "196734",
    "category": "Coffees & Teas",
    "pkg_size": "15.2oz Bottle",
    "case_qty": "6",
    "upc": "",
    "full_name": "KeVita Sparkling Ginger Colada - 15.2oz Bottle (6ct)"
  },
  {
    "name": "Brisk Blood Orange",
    "sku": "205847",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Blood Orange - 1l Bottle (15ct)"
  },
  {
    "name": "Brisk Blood Orange",
    "sku": "205848",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Blood Orange - 1l Bottle (15ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Coffee Caramel",
    "sku": "320260",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Coffee Caramel - 15oz Can (12ct)"
  },
  {
    "name": "Starbucks Pink Drink",
    "sku": "320466",
    "category": "Coffees & Teas",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Pink Drink - 14oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Paradise Drink",
    "sku": "320467",
    "category": "Coffees & Teas",
    "pkg_size": "14oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Paradise Drink - 14oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappuccino Caramel",
    "sku": "320493",
    "category": "Coffees & Teas",
    "pkg_size": "6.5oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino Caramel - 6.5oz Can (12ct)"
  },
  {
    "name": "Brisk Blueberry Pomegranate",
    "sku": "320862",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Blueberry Pomegranate - 1l Bottle (15ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Rich Vanilla 0g Added Sugar",
    "sku": "322802",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Rich Vanilla 0g Added Sugar - 11oz Can (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Bold Mocha 0g Added Sugar",
    "sku": "322748",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Bold Mocha 0g Added Sugar - 11oz Can (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Dark Caramel 0g Added Sugar",
    "sku": "322749",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Dark Caramel 0g Added Sugar - 11oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Iced Tea Extra Sweet",
    "sku": "170817",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Pure Leaf Iced Tea Extra Sweet - 16.9oz Bottle (18ct)"
  },
  {
    "name": "Starbucks Cold Brew Salted Caramel Cream",
    "sku": "322501",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Cold Brew Salted Caramel Cream - 11oz Can (12ct)"
  },
  {
    "name": "Starbucks Cold Brew Vanilla Sweet Cream",
    "sku": "322498",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Cold Brew Vanilla Sweet Cream - 11oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Blackberry",
    "sku": "323004",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Blackberry - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Cold Brew Chocolate Cream",
    "sku": "322503",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Cold Brew Chocolate Cream - 11oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Blackberry",
    "sku": "323002",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Blackberry - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Zero Sugar Sweet",
    "sku": "323012",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Zero Sugar Sweet - 16.9oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Zero Sugar Sweet",
    "sku": "323014",
    "category": "Coffees & Teas",
    "pkg_size": "64oz Bottle",
    "case_qty": "8",
    "upc": "",
    "full_name": "Pure Leaf Zero Sugar Sweet - 64oz Bottle (8ct)"
  },
  {
    "name": "Pure Leaf Zero Sugar Sweet",
    "sku": "323017",
    "category": "Coffees & Teas",
    "pkg_size": "18.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Zero Sugar Sweet - 18.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Dark Caramel 0g Added Sugar",
    "sku": "322743",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Dark Caramel 0g Added Sugar - 11oz Can (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Bold Mocha 0g Added Sugar",
    "sku": "322742",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Bold Mocha 0g Added Sugar - 11oz Can (12ct)"
  },
  {
    "name": "Starbucks Tripleshot Energy Rich Vanilla 0g Added Sugar",
    "sku": "322746",
    "category": "Coffees & Teas",
    "pkg_size": "11oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Tripleshot Energy Rich Vanilla 0g Added Sugar - 11oz Can (12ct)"
  },
  {
    "name": "Lipton Iced Tea White Raspberry",
    "sku": "102584",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea White Raspberry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Iced Tea Georgia Peach",
    "sku": "199911",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Georgia Peach - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Zero Sugar Green Tea Mixed Berry",
    "sku": "106551",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Zero Sugar Green Tea Mixed Berry - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Starbucks Pink Drink (Club Pack)",
    "sku": "323295",
    "category": "Coffees & Teas",
    "pkg_size": "8oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Pink Drink (Club Pack) - 8oz Bottle (12ct)"
  },
  {
    "name": "Brisk Blueberry Pomegranate",
    "sku": "320865",
    "category": "Coffees & Teas",
    "pkg_size": "1l Bottle",
    "case_qty": "15",
    "upc": "",
    "full_name": "Brisk Blueberry Pomegranate - 1l Bottle (15ct)"
  },
  {
    "name": "Pure Leaf Blackberry",
    "sku": "323294",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Pure Leaf Blackberry - 16.9oz Bottle (18ct)"
  },
  {
    "name": "Brisk Iced Tea Lemon",
    "sku": "192533",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Brisk Iced Tea Lemon - 16oz Can (12ct)"
  },
  {
    "name": "Brisk Blood Orange",
    "sku": "325281",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Brisk Blood Orange - 16oz Can (12ct)"
  },
  {
    "name": "Brisk Sweet Tea",
    "sku": "325284",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Brisk Sweet Tea - 16oz Can (12ct)"
  },
  {
    "name": "Brisk Iced Tea Strawberry Melon",
    "sku": "325283",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Brisk Iced Tea Strawberry Melon - 16oz Can (12ct)"
  },
  {
    "name": "Lipton Fusions Pineapple Mango Lemonade Tea",
    "sku": "325772",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Lipton Fusions Pineapple Mango Lemonade Tea - 16oz Can (12ct)"
  },
  {
    "name": "Lipton Fusions Strawberry Lemonade Tea",
    "sku": "325776",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Lipton Fusions Strawberry Lemonade Tea - 16oz Can (12ct)"
  },
  {
    "name": "Starbucks Frappuccino Lite Creamy Vanilla Gelato",
    "sku": "325315",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino Lite Creamy Vanilla Gelato - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappuccino Lite Sea Salt Caramel Gelato",
    "sku": "325314",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino Lite Sea Salt Caramel Gelato - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Frappuccino Lite Double Chocolate Gelato",
    "sku": "325317",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Frappuccino Lite Double Chocolate Gelato - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Pure Leaf Zero Sugar Sweet",
    "sku": "323668",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "18",
    "upc": "",
    "full_name": "Pure Leaf Zero Sugar Sweet - 16.9oz Bottle (18ct)"
  },
  {
    "name": "Pure Leaf Sweet Tea",
    "sku": "326124",
    "category": "Coffees & Teas",
    "pkg_size": "1.2gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pure Leaf Sweet Tea - 1.2gal Bag In Box (1ct)"
  },
  {
    "name": "Pure Leaf Unsweetened",
    "sku": "326125",
    "category": "Coffees & Teas",
    "pkg_size": "1.2gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pure Leaf Unsweetened - 1.2gal Bag In Box (1ct)"
  },
  {
    "name": "Lipton Iced Tea Sweet Tea",
    "sku": "325684",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Tea Sweet Tea - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Black Tea Bags",
    "sku": "337589",
    "category": "Coffees & Teas",
    "pkg_size": "3oz Bag",
    "case_qty": "32",
    "upc": "",
    "full_name": "Lipton Black Tea Bags - 3oz Bag (32ct)"
  },
  {
    "name": "Starbucks Iced Energy Strawberry Kiwi",
    "sku": "328074",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Iced Energy Strawberry Kiwi - 12oz Can (12ct)"
  },
  {
    "name": "Lipton Iced Green Tea Citrus",
    "sku": "325683",
    "category": "Coffees & Teas",
    "pkg_size": "16.9oz Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Lipton Iced Green Tea Citrus - 16.9oz Bottle (24ct)"
  },
  {
    "name": "Lipton Fusions Peach Passion Fruit",
    "sku": "332625",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Lipton Fusions Peach Passion Fruit - 16oz Can (12ct)"
  },
  {
    "name": "Lipton Fusions Peach Passion Fruit",
    "sku": "332626",
    "category": "Coffees & Teas",
    "pkg_size": "16oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Lipton Fusions Peach Passion Fruit - 16oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Mental Focus Raspberry",
    "sku": "335231",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Mental Focus Raspberry - 12oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Mental Focus Raspberry",
    "sku": "335232",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Mental Focus Raspberry - 12oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Mental Focus Peach",
    "sku": "335233",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Mental Focus Peach - 12oz Can (12ct)"
  },
  {
    "name": "Pure Leaf Mental Focus Peach",
    "sku": "335234",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Pure Leaf Mental Focus Peach - 12oz Can (12ct)"
  },
  {
    "name": "Starbucks Coffee Protein Cafe Classic",
    "sku": "335436",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Coffee Protein Cafe Classic - 12oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Coffee Protein Cafe Mocha",
    "sku": "335445",
    "category": "Coffees & Teas",
    "pkg_size": "12oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Coffee Protein Cafe Mocha - 12oz Bottle (12ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Zero Sugar French Vanilla",
    "sku": "331224",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Zero Sugar French Vanilla - 15oz Can (12ct)"
  },
  {
    "name": "Starbucks Doubleshot Energy Zero Sugar Dark Chocolate",
    "sku": "331225",
    "category": "Coffees & Teas",
    "pkg_size": "15oz Can",
    "case_qty": "12",
    "upc": "",
    "full_name": "Starbucks Doubleshot Energy Zero Sugar Dark Chocolate - 15oz Can (12ct)"
  },
  {
    "name": "Frappuccino Lite Chocolate Hazelnut Gelato",
    "sku": "331251",
    "category": "Coffees & Teas",
    "pkg_size": "9.5oz Bottle",
    "case_qty": "12",
    "upc": "",
    "full_name": "Frappuccino Lite Chocolate Hazelnut Gelato - 9.5oz Bottle (12ct)"
  },
  {
    "name": "Cool Attitudes Sour Flavor Shot",
    "sku": "61821",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Cool Attitudes Sour Flavor Shot - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Siberian Chill Cherry",
    "sku": "134375",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Siberian Chill Cherry - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Siberian Chill Blu Raz",
    "sku": "134374",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Siberian Chill Blu Raz - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Cool Attitudes Margarita",
    "sku": "152045",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Cool Attitudes Margarita - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi Frozen Carbonated Beverage",
    "sku": "6151",
    "category": "Specialty Beverages",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pepsi Frozen Carbonated Beverage - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Mountain Dew Frozen Carbonated Beverage",
    "sku": "6153",
    "category": "Specialty Beverages",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mountain Dew Frozen Carbonated Beverage - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Mountain Dew Frozen Carbonated Beverage",
    "sku": "33071",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Mountain Dew Frozen Carbonated Beverage - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Dr Pepper Frozen Carbonated Beverage",
    "sku": "37955",
    "category": "Specialty Beverages",
    "pkg_size": "5gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Dr Pepper Frozen Carbonated Beverage - 5gal Bag In Box (1ct)"
  },
  {
    "name": "Siberian Chill Strawberry Kiwi",
    "sku": "134376",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Siberian Chill Strawberry Kiwi - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Siberian Chill Orange Cream",
    "sku": "134377",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Siberian Chill Orange Cream - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Stubborn Soda Classic Root Beer (Fountain)",
    "sku": "152152",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Stubborn Soda Classic Root Beer (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Stubborn Soda Agave Vanilla Cream (Fountain)",
    "sku": "152148",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Stubborn Soda Agave Vanilla Cream (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Stubborn Soda Black Cherry Tarragon (Fountain)",
    "sku": "152153",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Stubborn Soda Black Cherry Tarragon (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Stubborn Soda Pineapple Cream (Fountain)",
    "sku": "155897",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Stubborn Soda Pineapple Cream (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Bundaberg Ginger Beer",
    "sku": "162472",
    "category": "Specialty Beverages",
    "pkg_size": "375ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Ginger Beer - 375ml Bottle (24ct)"
  },
  {
    "name": "Bundaberg Root Beer",
    "sku": "162475",
    "category": "Specialty Beverages",
    "pkg_size": "375ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Root Beer - 375ml Bottle (24ct)"
  },
  {
    "name": "Fruit Works Blue Raspberry Frozen Carbonated Beverage",
    "sku": "68581",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Fruit Works Blue Raspberry Frozen Carbonated Beverage - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Pepsi Frozen Carbonated Beverage",
    "sku": "161374",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Pepsi Frozen Carbonated Beverage - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Bundaberg Diet Ginger Beer",
    "sku": "162473",
    "category": "Specialty Beverages",
    "pkg_size": "375ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Diet Ginger Beer - 375ml Bottle (24ct)"
  },
  {
    "name": "Bundaberg Blood Orange",
    "sku": "166043",
    "category": "Specialty Beverages",
    "pkg_size": "375ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Blood Orange - 375ml Bottle (24ct)"
  },
  {
    "name": "Bundaberg Guava",
    "sku": "166041",
    "category": "Specialty Beverages",
    "pkg_size": "375ml Bottle",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Guava - 375ml Bottle (24ct)"
  },
  {
    "name": "Siberian Chill Dragons Blood",
    "sku": "163818",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Siberian Chill Dragons Blood - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Stubborn Soda Draft Cola (Fountain)",
    "sku": "166838",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Stubborn Soda Draft Cola (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Stubborn Soda Draft Cola Zero Sugar (Fountain)",
    "sku": "166839",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Stubborn Soda Draft Cola Zero Sugar (Fountain) - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Cool Attitudes Ginger Beer",
    "sku": "170209",
    "category": "Specialty Beverages",
    "pkg_size": "2gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Cool Attitudes Ginger Beer - 2gal Bag In Box (1ct)"
  },
  {
    "name": "Citrus Springs 100% Apple Juice",
    "sku": "126225",
    "category": "Specialty Beverages",
    "pkg_size": "3gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Citrus Springs 100% Apple Juice - 3gal Bag In Box (1ct)"
  },
  {
    "name": "Bundaberg Ginger Beer",
    "sku": "171376",
    "category": "Specialty Beverages",
    "pkg_size": "200ml Can",
    "case_qty": "24",
    "upc": "",
    "full_name": "Bundaberg Ginger Beer - 200ml Can (24ct)"
  },
  {
    "name": "Citrus Springs Cranberry Juice",
    "sku": "206892",
    "category": "Specialty Beverages",
    "pkg_size": "2gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Citrus Springs Cranberry Juice - 2gal Bag In Box (1ct)"
  },
  {
    "name": "Citrus Springs 100% Orange Juice",
    "sku": "206891",
    "category": "Specialty Beverages",
    "pkg_size": "2gal Bag In Box",
    "case_qty": "1",
    "upc": "",
    "full_name": "Citrus Springs 100% Orange Juice - 2gal Bag In Box (1ct)"
  }
];
