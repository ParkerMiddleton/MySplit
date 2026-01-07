/**
 * TODO: This will be the frame were users will be able to scroll through the 7 days of a given week.
 * For now assume that we dont need to worry about whether or not the day has happend,
 * This should be a scrollable view that houses up to 7 different calendar-items. 
*/
import { useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { CalanderItem } from '@/components/calander-item';

type CalanderDay = {
  key: string;
  month: string;
  day: number;
  isInProgress?: boolean;
  isCompleted?: boolean;
  durationMinutes?: number;
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ITEM_WIDTH = 180;
const ITEM_SPACING = 12;

export function CalanderView() {
  const weekDays = useMemo<CalanderDay[]>(() => {
    const today = new Date();

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);

      return {
        key: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        month: MONTHS[date.getMonth()],
        day: date.getDate(),
        isInProgress: index === 0,
      };
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={weekDays}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + ITEM_SPACING,
          offset: (ITEM_WIDTH + ITEM_SPACING) * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <CalanderItem
              month={item.month}
              day={item.day}
              isInProgress={item.isInProgress}
              isCompleted={item.isCompleted}
              durationMinutes={item.durationMinutes}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  itemWrapper: {
    width: ITEM_WIDTH,
  },
  separator: {
    width: ITEM_SPACING,
  },
});
