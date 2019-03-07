import csv
count = 1
fname = 'mega.txt'
cname = 'mega.csv'
first = []
second = []
third = []
fourth = []
finalList = []
y = 0
z = 0


with open(fname) as f:
    for x in f:
        if count == 1:
            line = x.strip('\n')
            first.append(line)
            count += 1
        else:
            line = x.strip('\n')
            fourth.append(line)
            count -= 1

for x in first:
    phone = first[y].rsplit(' - ', 1)
    second.append(phone[0])
    third.append(phone[1])
    y += 1

with open(cname, mode='w') as csv_file:
    writer = csv.writer(csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(['name','num','descr'])
    for x in second:
        writer.writerow([second[z], third[z], fourth[z]])
        z += 1