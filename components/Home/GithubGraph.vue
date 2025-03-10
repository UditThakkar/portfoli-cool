<!-- <script setup>
import { ref, onMounted } from 'vue';
import { getContributionGraph } from '../../config/github';

const contributions = ref([]);
const totalContributions = ref(0);

const fetchContributions = async () => {
  try {
    const data = await getContributionGraph('UditThakkar');
    contributions.value = data.weeks;
    totalContributions.value = data.totalContributions;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
  }
};

onMounted(fetchContributions);
</script>

<template>
  <div class="github-graph mt-10">
    <h2 class="text-2xl font-semibold text-zinc-100">GitHub Contributions</h2>
    <p class="text-sm text-zinc-400 mb-4">
      Total Contributions: {{ totalContributions }}
    </p>

    <div class="grid grid-cols-53 gap-1">
      <div
        v-for="week in contributions"
        :key="week"
        class="flex flex-col gap-1"
      >
        <div
          v-for="day in week.contributionDays"
          :key="day.date"
          :style="{ backgroundColor: day.color }"
          class="w-3 h-3 rounded-sm"
          title="Contributions: {{ day.contributionCount }} | Date: {{ day.date }}"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.github-graph {
  background-color: #1a1a1a;
  padding: 16px;
  border-radius: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(53, 1fr);
  gap: 2px;
}
</style> -->
<script setup>
import { ref, onMounted } from 'vue';
import { getContributionGraph } from '../../config/github';

const contributions = ref([]);
const totalContributions = ref(0);
const maxContributions = ref(0);

const fetchContributions = async () => {
  try {
    const data = await getContributionGraph('UditThakkar');
    contributions.value = data.weeks;
    totalContributions.value = data.totalContributions;
    maxContributions.value = Math.max(
      ...data.weeks.flatMap((week) =>
        week.contributionDays.map((day) => day.contributionCount)
      )
    );
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
  }
};

const getContributionLevel = (count) => {
  if (count === 0) return 'bg-gray-800';
  if (count < maxContributions.value * 0.25) return 'bg-green-200';
  if (count < maxContributions.value * 0.5) return 'bg-green-400';
  if (count < maxContributions.value * 0.75) return 'bg-green-600';
  return 'bg-green-800';
};

const openGitHubDay = (date) => {
  window.open(`https://github.com/UditThakkar?tab=overview&from=${date}&to=${date}`, '_blank');
};

onMounted(fetchContributions);
</script>

<template>
  <div class="relative px-4 sm:px-8 lg:px-12 mt-16">
    <div class="max-w-2xl mx-auto lg:max-w-5xl">
      <div class="github-graph ">
      <!-- Header -->
        <h2 class="text-2xl font-semibold text-zinc-100 mb-1">
          GitHub Contributions
        </h2>
        <p class="text-sm text-zinc-400 mb-4">
          Total Contributions: {{ totalContributions }}
        </p>

        <!-- Contribution Graph -->
        <div class="grid grid-cols-53 gap-1 overflow-auto">
          <div
            v-for="(week, weekIndex) in contributions"
            :key="weekIndex"
            class="flex flex-col gap-1"
          >
            <div
              v-for="(day, dayIndex) in week.contributionDays"
              :key="dayIndex"
              :class="[getContributionLevel(day.contributionCount), 'w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer']"
              :title="`📅 ${day.date}\n🟢 ${day.contributionCount} contributions`"
              @click="openGitHubDay(day.date)"
            />
          </div>
        </div>

        <!-- Heatmap Legend -->
        <div class="mt-4 flex items-center gap-2 text-xs text-zinc-400">
          <span>Less</span>
          <div class="w-3 h-3 bg-gray-800 rounded-sm"></div>
          <div class="w-3 h-3 bg-green-200 rounded-sm"></div>
          <div class="w-3 h-3 bg-green-400 rounded-sm"></div>
          <div class="w-3 h-3 bg-green-600 rounded-sm"></div>
          <div class="w-3 h-3 bg-green-800 rounded-sm"></div>
          <span>More</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.github-graph {
  background-color: #1a1a1a;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Smooth transition & scale effect */
.w-3.h-3 {
  transition: transform 0.2s ease, background-color 0.2s ease;
  border-radius: 4px;
  cursor: pointer;
}

/* Hover effect with subtle glow */
.w-3.h-3:hover {
  transform: scale(1.2);
  box-shadow: 0 2px 12px rgba(0, 255, 0, 0.5);
}

/* Legend */
.grid {
  display: grid;
  grid-template-columns: repeat(53, 1fr);
  gap: 2px;
}

/* Responsive Layout */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(26, 1fr);
  }
}
</style>
