/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps } from 'next';

import Page from '@components/page';
import SpeakersGrid from '@components/speakers-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllSpeakers } from '@lib/cms-api';
import { Speaker } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  speakers: Speaker[];
};

const djs: Speaker[] = [
  {
    name: "mopp",
    bio: "Test Bio",
    title: "Test Title",
    slug: "Test Slug",
    twitter: "Test Twitter",
    github: "Test GitHub",
    company: "アイムエンタープライズ",
    talk: {
      title: "Test Talk Title",
      description: "Test Talk Description",
      start: "Test Talk Start",
      end: "Test Talk End",
      speaker: [],
    },
    image: { url: "https://images.prismic.io/nextjs-conference/4674eedd-c52c-422b-9e0a-601d19fef2ab_image+%2823%29.jpeg" },
    imageSquare: { url: "https://images.prismic.io/nextjs-conference/4674eedd-c52c-422b-9e0a-601d19fef2ab_image+%2823%29.jpeg" },
  },
  {
    name: "sinker",
    bio: "Test Bio",
    title: "Test Title",
    slug: "Test Slug",
    twitter: "Test Twitter",
    github: "Test GitHub",
    company: "81プロデュース",
    talk: {
      title: "Test Talk Title",
      description: "Test Talk Description",
      start: "Test Talk Start",
      end: "Test Talk End",
      speaker: [],
    },
    image: { url: "https://images.prismic.io/nextjs-conference/6f3474a1-5525-41e7-a3fd-76918d36e251_image+%2822%29.jpeg" },
    imageSquare: { url: "https://images.prismic.io/nextjs-conference/6f3474a1-5525-41e7-a3fd-76918d36e251_image+%2822%29.jpeg" },
  },
  {
    name: "だーよし",
    bio: "Test Bio",
    title: "Test Title",
    slug: "Test Slug",
    twitter: "Test Twitter",
    github: "Test GitHub",
    company: "青二プロダクション",
    talk: {
      title: "Test Talk Title",
      description: "Test Talk Description",
      start: "Test Talk Start",
      end: "Test Talk End",
      speaker: [],
    },
    image: { url: "https://images.prismic.io/nextjs-conference/cfdc2089-a4f4-4db6-ab5d-f383c51757b3_image+%2821%29.jpeg" },
    imageSquare: { url: "https://images.prismic.io/nextjs-conference/cfdc2089-a4f4-4db6-ab5d-f383c51757b3_image+%2821%29.jpeg" },
  },

]

export default function Speakers({ speakers }: Props) {
  const meta = {
    title: 'Speakers - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        {/* <Header hero="Speakers" description={meta.description} /> */}
        <Header hero="DJs" description="フロアが沸いて沸いてしゃーない" />
        <SpeakersGrid speakers={speakers} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const speakers = await getAllSpeakers();

  return {
    props: {
      // speakers: speakers || []
      speakers: djs
    },
    revalidate: 60
  };
};
