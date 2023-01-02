import React, { useMemo } from 'react'
import { Flex, Grid } from '@chakra-ui/react'

import { ExperienceBar, ExperienceCard } from './components'
import { ExperienceSectionModel } from '@/infra/graphql/home/models'
import { SectionInfo } from '@/application/components'

export function ExperienceSection({
  sectionHeader,
  experienceBars,
  experienceCards,
}: ExperienceSectionModel) {
  const renderExperienceCards = useMemo(
    () =>
      experienceCards.map(experienceCard => (
        <ExperienceCard key={experienceCard.id} {...experienceCard} />
      )),
    [experienceCards],
  )

  const renderExperienceBars = useMemo(
    () =>
      experienceBars.map(experienceBar => (
        <ExperienceBar key={experienceBar.id} {...experienceBar} />
      )),
    [experienceBars],
  )

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      as="section"
      gap={'5.8rem'}
      mt={'14.6rem'}
      flexDirection="column"
    >
      <SectionInfo
        title={sectionHeader.title}
        description={sectionHeader.description}
      />
      <Flex flexWrap={'wrap'} gap={'2.05rem'} mt={'1.3rem'}>
        {renderExperienceCards}
      </Flex>
      <Grid
        gridTemplateColumns={'1fr 1fr'}
        w={'100%'}
        columnGap={'1.8rem'}
        rowGap={'3.1rem'}
      >
        {renderExperienceBars}
      </Grid>
    </Flex>
  )
}
