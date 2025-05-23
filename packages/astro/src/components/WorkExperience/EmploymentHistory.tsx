import { employmentHistory } from '@/data';
import TimelineItem from '../ui/TimelineItem';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionWrapper from '../MotionWrapper';
import React from 'react';

export default function EmploymentHistory() {
  return (
    <section id="experience" className="py-12 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              💼
            </motion.span>{' '}
            Employment History
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {employmentHistory.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`👨‍💻 ${job.position}`}
              subtitle={job.company}
              location={job.location}
              date={`${job.period}`}
              isLast={index === employmentHistory.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-yellow-500/20 dark:bg-card/10 dark:border-yellow-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-yellow-500/10 mr-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <h4 className="text-sm font-medium">Key Achievements</h4>
                </div>
                <ul className="list-circle ml-4 space-y-2 text-sm">
                  {job.summary.map((item, i) => (
                    <motion.li
                      key={item + i}
                      className="text-muted-foreground relative pl-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
