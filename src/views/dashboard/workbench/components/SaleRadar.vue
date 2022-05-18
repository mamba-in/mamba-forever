<template>
  <Card title="收视率统计" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from 'vue';
  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  const props = defineProps({
    loading: Boolean,
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '400px',
    },
  });

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return;
      }
      setOptions({
        legend: {
          bottom: 0,
          data: ['Regular', 'Playoffs'],
        },
        tooltip: {},
        radar: {
          radius: '60%',
          splitNumber: 8,
          indicator: [
            {
              name: '2017',
            },
            {
              name: '2018',
            },
            {
              name: '2019',
            },
            {
              name: '2020',
            },
            {
              name: '2021',
            },
            {
              name: '2022',
            },
          ],
        },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              shadowBlur: 0,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
            data: [
              {
                value: [80, 68, 86, 80, 90, 70],
                name: 'Regular',
                itemStyle: {
                  color: '#d83e54',
                },
              },
              {
                value: [50, 75, 90, 76, 40, 65],
                name: 'Playoffs',
                itemStyle: {
                  color: '#0b6db4',
                },
              },
            ],
          },
        ],
      });
    },
    { immediate: true },
  );
</script>
