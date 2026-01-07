/**
 * TODO: Create a calander card item that will display the following data.
 * - Month in small text above the day of the month in larger text in the center. 
 * - Below the Day of the month, the user will have a clickable option to start next day in the workout split
 * - Give a workout duration, This will be "in progress" if the user is currently in a workout, or some data between 45-90 mins otherwise for now.
 * - "In progress" for a in progress workout, "Completed" for completed
 */
import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type CalanderItemProps = {
  month: string;
  day: number;
  isInProgress?: boolean;
  isCompleted?: boolean;
  durationMinutes?: number;
  onStartNextDay?: () => void;
};

export function CalanderItem({
  month,
  day,
  isInProgress = false,
  isCompleted = false,
  durationMinutes,
  onStartNextDay,
}: CalanderItemProps) {
  const placeholderDuration = useMemo(
    () => Math.floor(45 + Math.random() * 46),
    []
  );

  const durationLabel = isInProgress
    ? 'In progress'
    : `${durationMinutes ?? placeholderDuration} min`;
  const statusLabel = isInProgress ? 'In progress' : isCompleted ? 'Completed' : 'Upcoming';

  return (
    <ThemedView style={styles.card} lightColor="#f7f7f7" darkColor="#1a1a1a">
      <View style={styles.dateBlock}>
        <ThemedText style={styles.monthText}>{month}</ThemedText>
        <ThemedText style={styles.dayText}>{day}</ThemedText>
      </View>

      <Pressable
        onPress={onStartNextDay}
        style={({ pressed }) => [
          styles.startButton,
          pressed ? styles.startButtonPressed : null,
        ]}
        disabled={!onStartNextDay}
      >
        <ThemedText style={styles.startButtonText}>Start next day</ThemedText>
      </Pressable>

      <View style={styles.metaRow}>
        <ThemedText style={styles.durationText}>{durationLabel}</ThemedText>
        <ThemedText style={styles.statusText}>{statusLabel}</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  dateBlock: {
    alignItems: 'center',
  },
  monthText: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  dayText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
  },
  startButton: {
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#0a7ea4',
  },
  startButtonPressed: {
    opacity: 0.7,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  durationText: {
    fontSize: 13,
    fontWeight: '600',
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
