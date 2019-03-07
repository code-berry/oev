import csv
count = 0
fname = 'eat.txt'
first = []
second = []
finalList = []


with open(fname) as f:
    content = f.readlines()


content = [x.strip() for x in content]

for x in range(0,len(content)):
    count += 1
    if count == 1:
        first.append(content[x])
    else:
        second.append(content[x])
        count = 0


for x in range(0,len(first)):
    newList = first[x].split(' - ', 1)
    newList.append(second[x])
    finalList.append(newList)

# for x in range(0,len(first)):
#     print(finalList[x][0])
#     print(finalList[x][1])
#     print(finalList[x][2])

with open('eat.csv', mode='w') as eat_file:
    eat_writer = csv.writer(eat_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    for x in range(0,len(finalList)):
        eat_writer.writerow([finalList[x][0], finalList[x][1], finalList[x][2]])





#
# content = [x.strip() for x in content]
#
# print(content)
#
# for x in content:
#
#
