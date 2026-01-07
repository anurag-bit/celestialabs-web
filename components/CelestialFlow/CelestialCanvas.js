"use client";
import React, { useCallback } from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    Controls
} from 'reactflow';
import 'reactflow/dist/style.css';

import styles from './CelestialCanvas.module.css';
import NodeResource from './NodeResource';
import EdgeCircuit from './EdgeCircuit';

const nodeTypes = {
    resource: NodeResource,
};

const edgeTypes = {
    circuit: EdgeCircuit,
};

const initialNodes = [
    {
        id: '1',
        type: 'resource',
        position: { x: 250, y: 50 },
        data: { label: 'CORE UPLINK', status: 'active', load: '42%', uptime: '99.9%' }
    },
    {
        id: '2',
        type: 'resource',
        position: { x: 100, y: 250 },
        data: { label: 'DATA REFINERY', status: 'active', load: '78%', uptime: '12h' }
    },
    {
        id: '3',
        type: 'resource',
        position: { x: 400, y: 250 },
        data: { label: 'CAPITAL NODE', status: 'inactive', load: '0%', uptime: '0h' }
    },
    {
        id: '4',
        type: 'resource',
        position: { x: 250, y: 450 },
        data: { label: 'ARCHIVE_01', status: 'active', load: '12%', uptime: '720h' }
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'circuit', animated: true, label: '10 GB/s', style: { stroke: 'var(--starlight)' } },
    { id: 'e1-3', source: '1', target: '3', type: 'circuit', animated: true, label: 'IDLE', style: { stroke: 'var(--grid-line)' } },
    { id: 'e2-4', source: '2', target: '4', type: 'circuit', animated: true, style: { stroke: 'var(--starlight)' } },
    { id: 'e3-4', source: '3', target: '4', type: 'circuit', style: { stroke: 'var(--grid-line)' } },
];

export default function CelestialCanvas() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, type: 'circuit', animated: true, style: { stroke: 'var(--starlight)' } }, eds)),
        [setEdges]
    );

    return (
        <div className={styles.canvasWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            >
                <Background color="#ffffff" gap={20} size={1} style={{ opacity: 0.1 }} />
                <Controls
                    style={{
                        filter: 'invert(1) grayscale(1)',
                        border: '1px solid #333',
                        borderRadius: '4px'
                    }}
                />
            </ReactFlow>
        </div>
    );
}
