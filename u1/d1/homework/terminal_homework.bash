# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
# i am a window user so i create inside my home directory in linux
cd ~
mkdir ~/galaxy_far_far_away


# Create a directory called `death_star`

# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
mkdir ~/death_star && touch ~/death_star/{darth_vader,princess_leia,storm_trooper}.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`

# and create the following files in it:
# luke.txt
# ben_kenobi.txt
mkdir ~/galaxy_far_far_away/tatooine && touch ~/galaxy_far_far_away/tatooine/{luke,ben_kenobi}.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
cd ~/galaxy_far_far_away/tatooine
mkdir millenium_falcon && touch millenium_falcon/{han_solo,chewbaca}.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
cd ~
cp death_star/storm_trooper.txt galaxy_far_far_away/tatooine
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
mv galaxy_far_far_away/tatooine/{luke,obi_wan}.txt galaxy_far_far_away/tatooine/millenium_falcon

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
mv galaxy_far_far_away/tatooine/millenium_falcon galaxy_far_far_away

# Move `millenium_falcon` into `death_star`
mv galaxy_far_far_away/millenium_falcon death_star

# Move `princess_leia.txt` into the `millenium_falcon`
mv death_star/princess_leia.txt death_star/millenium_falcon

# Delete `obi_wan.txt`
rm death_star/millenium_falcon/obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
# Make a directory in `yavin_4` called `x_wing` 
#(i combine the above 3)
mkdir -p galaxy_far_far_away/yavin_4/x_wing && mv death_star/millenium_falcon galaxy_far_far_away/yavin_4

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
cd galaxy_far_far_away
mv yavin_4/millenium_falcon/princess_leia.txt yavin_4 && mv yavin_4/millenium_falcon/luke.txt yavin_4/x_wing

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
mv yavin_4/{millenium_falcon,x_wing} .
cd ~
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
mkdir death_star/tie_fighter_{1,2,3}

# Move `darth_vader.txt` into `tie_fighter_1`
mv death_star/darth_vader.txt death_star/tie_fighter_1

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
echo death_star/tie_fighter_{2,3} | xargs -n 1 cp death_star/storm_trooper.txt

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
mv death_star/tie_fighter_{1,2,3} galaxy_far_far_away

# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
rm -rf galaxy_far_far_away/tie_fighter_{2,3}

# Touch a file in "**x_wing**" called "**the_force.txt**".
touch galaxy_far_far_away/x_wing/the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
rm -rf death_star

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
mv galaxy_far_far_away/{x_wing,millenium_falcon} galaxy_far_far_away/yavin_4

# Celebrate!