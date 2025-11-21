'use client';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';
import Image from 'next/image';

export function BentoGrid() {
    return (
        <div className='h-full w-full overflow-auto'>
            <div className='flex items-end justify-center pb-12'>
                <div className='columns-1 gap-4 px-8 sm:columns-3'>
                    {[
                        '/mock_presentations/white.png',
                        '/mock_presentations/space.png',
                        '/mock_presentations/pistachio.png',
                        '/mock_presentations/white2.png',
                        '/mock_presentations/space2.png',
                        '/mock_presentations/gold.png',
                    ].map((imgSrc, index) => {
                        return (
                            <InView
                                viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.09,
                                        },
                                    },
                                }}
                                key={index}
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            filter: 'blur(0px)',
                                        },
                                    }}
                                    className='mb-4'
                                >
                                    <Image
                                        src={imgSrc}
                                        alt={` ${index}`}
                                        className='size-full rounded-lg object-contain'
                                        width={400}
                                        height={800}
                                    />
                                </motion.div>
                            </InView>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

