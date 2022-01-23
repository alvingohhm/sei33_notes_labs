import string

alphabet_string = string.ascii_uppercase
translation_chart = dict(zip(range(1, 27), alphabet_string))

# print(translation_chart)

# 2 beeps, 6 boops
beeps = 2
boops = 6
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 0 beeps, 5 boops
beeps = 0
boops = 5
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 9 beeps, 3 boops
beeps = 9
boops = 3
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 4 beeps, 8 boops
beeps = 4
boops = 8
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 10 beeps, 5 boopsbeeps = 0
beeps = 10
boops = 5
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# BOP! (pretty sure this is a space!)beeps = 0

# 11 beeps, 12 boops
beeps = 11
boops = 12
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 5 beeps, 10 boops
beeps = 5
boops = 10
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 1 beep, 17 boops
beeps = 1
boops = 17
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 5 beeps, 7 boops
beeps = 5
boops = 7
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])
# 4 beeps, 0 boops
beeps = 4
boops = 0
total = beeps + boops
print(total)
print("Letter:", translation_chart[total])

# /////////////////////////////////////////////
# Another better way
# /////////////////////////////////////////////
beeps_list = [2, 0, 9, 4, 10, 0, 11, 5, 1, 5, 4]
boops_list = [6, 5, 3, 8, 5, 0, 12, 10, 17, 7, 0]
beeps_boops_list = list(zip(beeps_list, boops_list))
# print(list(zip(beeps_list, boops_list)))
signal_list = [beeps + boops for beeps, boops in beeps_boops_list]


def decode_signal(signal_list):
    letter_list = []
    for signal in signal_list:
        if signal == 0:
            letter_list.append(" ")
        else:
            letter_list.append(translation_chart[signal])

    return "".join(letter_list)


print(decode_signal(signal_list))
